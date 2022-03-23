import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnathorizedException from 'App/Exceptions/UnathorizedException'
import VoteResponse from 'App/Models/VoteResponse'
import VoteValidator from 'App/Validators/CreateVoteValidator'
import UpdateVoteValidator from 'App/Validators/UpdateVoteValidator'

export default class VotesDiscussController {
  public async index({ request, response }: HttpContextContract) {
    const respuestaId = request.input('responseId')
    const votesResponse = await VoteResponse.query().if(respuestaId, (query) => {
      query.where(respuestaId)
    })

    return response.ok({ data: { votesResponse } })
  }

  public async store({ auth, response, request }: HttpContextContract) {
    const validatedData = await request.validate(VoteValidator)

    const vote =
      auth.user?.role === 'admin'
        ? await VoteResponse.create(validatedData)
        : await auth.user?.related('votediscusses').create(validatedData)

    return response.created({ data: vote })
  }

  public async show({ params, response }: HttpContextContract) {
    const votes = await VoteResponse.query().where('id', params.id).firstOrFail()

    return response.ok({ data: votes })
  }

  public async update({ params, auth, response, request }: HttpContextContract) {
    const vote = await VoteResponse.query().where('id', params.id).firstOrFail()

    if (auth.user?.id !== vote.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes modificar tus propios votos')
    }

    const validatedData = await request.validate(UpdateVoteValidator)

    vote.merge(validatedData)

    return response.ok({ data: vote })
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const vote = await VoteResponse.query().where('id', params.id).firstOrFail()

    if (auth.user?.id !== vote.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes eliminar tus propios votos')
    }

    await vote.delete()

    return response.noContent()
  }
}
