import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Response from 'App/Models/Response'
import ResponseValidator from 'App/Validators/CreateResponseValidator'
import UpdateResponseValidator from 'App/Validators/UpdateResponseValidator'

export default class ResponsesController {
  public async index({ params, response }: HttpContextContract) {
    const responsesForum = await Response.query()
      .orderBy(params.sort, params.order)
      .orderBy('pinned', 'desc')
      .preload('user')
      .withCount('voteresponses', (countQuery) => {
        countQuery.where('positive', true).as('TotalPositiveVotes')
      })
      .withCount('voteresponses', (countQuery) => {
        countQuery.where('positive', false).as('TotalNegativeVotes')
      })
    return response.ok({ data: responsesForum })
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ResponseValidator)

    const responseForum = await auth.user?.related('responses').create(validatedData)

    return response.created({ data: responseForum })
  }

  public async show({ params, response }: HttpContextContract) {
    const responseForum = await Response.query()
      .where('id', params.id)
      .preload('user', (userQuery) => {
        userQuery.select('id', 'username', 'avatar')
      })
      .withCount('voteresponses', (countQuery) => {
        countQuery.where('positive', true).as('TotalPositiveVotes')
      })
      .withCount('voteresponses', (countQuery) => {
        countQuery.where('positive', false).as('TotalNegativeVotes')
      })
      .firstOrFail()

    return response.ok({ data: responseForum })
  }

  public async update({ request, auth, params, response }: HttpContextContract) {
    const discuss = await Response.query()
      .where('id', params.id)
      // .apply((scope) => scope.visibleTo(auth.user))
      .firstOrFail()

    const validatedData = await request.validate(UpdateResponseValidator)

    discuss.merge(validatedData)

    return response.ok({ data: discuss })
  }
}
