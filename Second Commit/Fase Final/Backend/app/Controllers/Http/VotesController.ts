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

    if (params.respuestaId !== null) {
      vote = await auth.user?.related('votediscusses').create(validatedData)
    } else {
      vote = await auth.user?.related('voteresponses').create(validatedData)
    }

    return response.created({ data: vote })
  }

  public async show({ params, response }: HttpContextContract) {
    let votes: any

    if (params.respuestaId !== null) {
      votes = await VoteResponse.query().where('id', params.id).firstOrFail()
    } else {
      votes = await VoteDiscuss.query().where('id', params.id).firstOrFail()
    }

    return response.ok({ data: votes })
  }
}
