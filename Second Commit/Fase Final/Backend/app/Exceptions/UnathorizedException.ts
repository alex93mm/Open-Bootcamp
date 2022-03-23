import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception } from '@adonisjs/core/build/standalone'

export default class UnathorizedException extends Exception {
  constructor(message: string) {
    super(message, 403)
  }

  public async handle(error: this, { response }: HttpContextContract) {
    return response.forbidden({ message: error.message })
  }
}
