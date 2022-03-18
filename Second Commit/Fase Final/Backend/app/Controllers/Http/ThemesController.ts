import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Theme from 'App/Models/Theme'
import ThemeValidator from 'App/Validators/ThemeValidator'

export default class ThemesController {
  public async index() {
    const themes = await Theme.query().orderBy('pinned', 'desc').preload('discusses')

    return themes
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(ThemeValidator)

    const theme = await Theme.create(validatedData)

    return theme
  }

  public async show({ params }: HttpContextContract) {
    const theme = await Theme.query()
      .where('id', params.id)
      .preload('discusses', (discusses) => {
        discusses.preload('responses', (responses) => {
          responses.as('totalRespuestas')
        })
      })
      .firstOrFail()
    return theme
  }
}
