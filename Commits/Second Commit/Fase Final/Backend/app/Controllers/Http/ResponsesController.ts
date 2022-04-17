import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnathorizedException from 'App/Exceptions/UnathorizedException'
import Response from 'App/Models/Response'
import ResponseValidator from 'App/Validators/CreateResponseValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateResponseUserValidator from 'App/Validators/UpdateResponseUserValidator'
import UpdateResponseValidator from 'App/Validators/UpdateResponseValidator'

export default class ResponsesController {
  public async index({ response, request }: HttpContextContract) {
    const pregunta = request.input('tema_id')

    const validatedData = await request.validate(SortValidator)
    const sort = validatedData.sort || 'pinned'
    const order = validatedData.order || 'desc'

    const responsesForum = await Response.query()
      .if(pregunta, (query) => {
        query.where(pregunta)
      })
      .orderBy(sort, order)
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

    const responseForum =
      auth.user?.role === 'admin'
        ? await Response.create(validatedData)
        : await auth.user?.related('responses').create(validatedData)

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
    const responseForum = await Response.query().where('id', params.id).firstOrFail()

    const validator =
      auth.user?.role === 'admin' ? UpdateResponseValidator : UpdateResponseUserValidator

    const validatedData = await request.validate(validator)

    if (auth.user?.id !== responseForum.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes actualizar tus propias respuestas')
    }

    responseForum.merge(validatedData)

    return response.ok({ data: responseForum })
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const responseForum = await Response.findOrFail('id', params.id)

    if (auth.user?.id !== responseForum.userId && auth.user?.role !== 'admin') {
      throw new UnathorizedException('Solo puedes eliminar tus propias respuestas')
    }

    await responseForum.delete()

    return response.noContent()
  }
}
