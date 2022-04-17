import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    const role = await auth.user?.role

    if (role?.valueOf() !== 'admin') {
      return response.badRequest('No es accesible para ti')
    }
    await next()
  }
}
