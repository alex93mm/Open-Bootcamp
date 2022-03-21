import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Theme from 'App/Models/Theme'
import ThemeValidator from 'App/Validators/CreateThemeValidator'
import UpdateThemeValidator from 'App/Validators/UpdateThemeValidator'

export default class ThemesController {
  public async index({ params, response }) {
    const themes = await Theme.query().orderBy('pinned', 'desc').preload('discusses')

    return response.ok({ data: themes })
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ThemeValidator)

    const theme = await Theme.create(validatedData)

    return response.created({ data: theme })
  }

  public async show({ params, response }: HttpContextContract) {
    const theme = await Theme.query()
      .where('id', params.id)
      .preload('discusses', (discussQuery) => {
        discussQuery.withCount('responses', (countQuery) => {
          countQuery.as('TotalRespuestas')
        })
        // .preload('responses')
      })
      .firstOrFail()

    return response.ok({ data: theme })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const theme = await Theme.findOrFail('id', params.id)

    const validatedData = await request.validate(UpdateThemeValidator)

    theme.merge(validatedData)

    return response.ok({ data: theme })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const theme = await Theme.findOrFail('id', params.id)

    return response.ok({ data: await theme.delete() })
  }
}
