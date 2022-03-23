import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnathorizedException from 'App/Exceptions/UnathorizedException'
import Discuss from 'App/Models/Discuss'
import DiscussValidator from 'App/Validators/CreateDiscussValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateDiscussUserValidator from 'App/Validators/UpdateDiscussUserValidator'
import UpdateDiscussValidator from 'App/Validators/UpdateDiscussValidator'

export default class DiscussesController {
  public async index({ response, request }: HttpContextContract) {
    const tema = request.input('tema_id')

    const validatedData = await request.validate(SortValidator)
    const sort = validatedData.sort || 'pinned'
    const order = validatedData.order || 'desc'

    const discusses = await Discuss.query()
      .if(tema, (query) => {
        query.where(tema)
      })
      .orderBy(sort, order)
      .preload('user', (query) => {
        query.select('id', 'username', 'avatar')
      })
      .withCount('responses', (countQuery) => {
        countQuery.as('total_respuestas')
      })

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
      .preload('user', (userQuery) => {
        userQuery.select('id', 'username', 'avatar')
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
    const discuss = await Discuss.query().where('id', params.id).firstOrFail()

    const validator =
      auth.user?.role === 'admin' ? UpdateDiscussValidator : UpdateDiscussUserValidator

    const validatedData = await request.validate(validator)

    if (auth.user?.id !== discuss.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes actualizar tus propias preguntas')
    }

    discuss.merge(validatedData)

    return response.ok({ data: discuss })
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const discuss = await Discuss.query().where('id', params.id).firstOrFail()

    if (auth.user?.id !== discuss.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes eliminar tus propias preguntas')
    }

    await discuss.delete()

    return response.noContent()
  }
}
