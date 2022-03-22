import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VoteDiscuss from 'App/Models/VoteDiscuss'
import VoteResponse from 'App/Models/VoteResponse'
import VoteValidator from 'App/Validators/CreateVoteValidator'

export default class VotesController {
  public async index({ params, response }: HttpContextContract) {
    const votesDiscuss = await VoteDiscuss.query()
    const votesResponse = await VoteResponse.query()

    return response.ok({ data: { votesDiscuss, votesResponse } })
  }

  public async store({ params, auth, response, request }: HttpContextContract) {
    let vote: any

    const validatedData = await request.validate(VoteValidator)

    if (params.respuestaId === null) {
      vote =
        auth.user?.role === 'admin'
          ? await VoteDiscuss.create(validatedData)
          : await auth.user?.related('votediscusses').create(validatedData)
    } else {
      vote =
        auth.user?.role === 'admin'
          ? await VoteResponse.create(validatedData)
          : await auth.user?.related('voteresponses').create(validatedData)
    }

    return response.created({ data: vote })
  }

  public async show({ params, response }: HttpContextContract) {
    let votes: any

    if (params.respuestaId === null) {
      votes = await VoteDiscuss.query().where('id', params.id).firstOrFail()
    } else {
      votes = await VoteResponse.query().where('id', params.id).firstOrFail()
    }

    return response.ok({ data: votes })
  }

  public async update({ params, auth, response }: HttpContextContract) {
    if (params.respuestaId !== null) {
      const vote = await VoteResponse.query()
        .where('id', params.id)
        .apply((scope) => scope.visibleTo(auth.user))
        .firstOrFail()
      return response.ok({ data: vote })
    } else {
      const vote = await VoteDiscuss.query()
        .where('id', params.id)
        .apply((scope) => scope.visibleTo(auth.user))
        .firstOrFail()
      return response.ok({ data: vote })
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    if (params.respuestaId !== null) {
      const vote = await VoteResponse.query()
        .where('id', params.id)
        .apply((scope) => scope.visibleTo(auth.user))
        .firstOrFail()
      return response.ok({ data: await vote.delete() })
    } else {
      const vote = await VoteDiscuss.query()
        .where('id', params.id)
        .apply((scope) => scope.visibleTo(auth.user))
        .firstOrFail()
      return response.ok({ data: await vote.delete() })
    }
  }
}
