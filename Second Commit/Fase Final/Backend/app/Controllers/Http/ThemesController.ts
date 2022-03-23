import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Theme from 'App/Models/Theme'
import ThemeValidator from 'App/Validators/CreateThemeValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateThemeValidator from 'App/Validators/UpdateThemeValidator'

export default class ThemesController {
  public async index({ response, request }) {
    const curso = request.input('curso_id')
    const modulo = request.input('modulo_id')

    const validatedData = await request.validate(SortValidator)
    const sort = validatedData.sort || 'pinned'
    const order = validatedData.order || 'desc'

    const themes = await Theme.query()
      .if(curso, (query) => {
        query.where(curso)
      })
      .if(modulo, (query) => {
        query.where(modulo)
      })
      .orderBy(sort, order)
      .preload('discusses')

    return response.ok({ data: themes })
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ThemeValidator)

    const theme = await Theme.create(validatedData)

    return response.created({ data: theme })
  }

  public async show({ params, request, response }: HttpContextContract) {
    const theme = await Theme.query()
      .where('id', params.id)
      .preload('discusses', (discussQuery) => {
        discussQuery.withCount('responses', (countQuery) => {
          countQuery.as('TotalRespuestas')
        })
        // .preload('responses')
      })
      .firstOrFail()

    return response.ok({ data: { theme, total_respuestas: theme.$extras.TotalRespuestas } })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const theme = await Theme.findOrFail('id', params.id)

    const validatedData = await request.validate(UpdateThemeValidator)

    theme.merge(validatedData)

    return response.ok({ data: theme })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const theme = await Theme.findOrFail('id', params.id)

    await theme.delete()

    return response.noContent()
  }
}
