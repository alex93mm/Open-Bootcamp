import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(RegisterValidator)
    try {
      const user = await User.create(validatedData)
      const token = await auth.login(user)
      return token
    } catch (error) {
      return response.badRequest({ message: 'Email ya registrado' })
    }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()

    const user = await User.query().where('email', email).first()

    if (user) {
      const passwordVerified = await Hash.verify(user.password, password)

      if (passwordVerified) {
        const token = await auth.login(user)

        return response.ok({ data: token })
      }
      return response.badRequest({ message: 'Contrasena incorrecta' })
    }
    return response.badRequest({ message: 'Email no encontrado' })
  }
}
