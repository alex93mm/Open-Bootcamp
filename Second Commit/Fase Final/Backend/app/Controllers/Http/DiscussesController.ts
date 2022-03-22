import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Discuss from 'App/Models/Discuss'
import DiscussValidator from 'App/Validators/CreateDiscussValidator'
import UpdateDiscussValidator from 'App/Validators/UpdateDiscussValidator'

export default class DiscussesController {
  public async index({ response }: HttpContextContract) {
    const discusses = await Discuss.query()
      .orderBy('pinned', 'desc')
      .preload('user')
      .preload('responses')

    return response.ok({ data: discusses })
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(DiscussValidator)

    const discuss =
      auth.user?.role === 'admin'
        ? await Discuss.create(validatedData)
        : await auth.user?.related('discusses').create(validatedData)

    return response.created({ data: discuss })
  }

  public async show({ params, response }: HttpContextContract) {
    const discuss = await Discuss.query()
      .where('id', params.id)
      .preload('responses', (responsesQuery) => {
        responsesQuery.preload('user', (userQuery) => {
          userQuery.select('id', 'username', 'avatar')
        })
      })
      .withCount('votediscusses', (countQuery) => {
        countQuery.where('positive', true).as('TotalPositiveVotes')
      })
      .withCount('votediscusses', (countQuery) => {
        countQuery.where('positive', false).as('TotalNegativeVotes')
      })
      .firstOrFail()

    return response.ok({ data: discuss })
  }

  public async update({ request, auth, params, response }: HttpContextContract) {
    const discuss = await Discuss.query()
      .where('id', params.id)
      .apply((scope) => scope.visibleTo(auth.user))
      .firstOrFail()

    const validatedData = await request.validate(UpdateDiscussValidator)

    discuss.merge(validatedData)

    return response.ok({ data: discuss })
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const discuss = await Discuss.query()
      .where('id', params.id)
      .apply((scope) => scope.visibleTo(auth.user))
      .firstOrFail()

    return response.ok({ data: await discuss.delete() })
  }
}
