import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Discuss from 'App/Models/Discuss'
import DiscussValidator from 'App/Validators/DiscussValidator'

export default class DiscussesController {
  public async index() {
    const discusses = await Discuss.query()

    return discusses
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(DiscussValidator)

    const discuss = await auth.user?.related('discusses').create(validatedData)

    // const discuss = await Discuss.create(validatedData)

    return discuss
  }
}
