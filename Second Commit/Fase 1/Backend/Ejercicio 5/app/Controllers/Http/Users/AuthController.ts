import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

//TODO: Pruebas sobre la authentication en ADONISJS 

// export default class AuthController {

//   public async register({ request, response }: HttpContextContract) {
//     const validations = await schema.create({
//       email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
//       password: schema.string(),
//       name: schema.string(),
//       image: schema.string(),
//       role: schema.string(),
//     })

//     const data = await request.validate({ schema: validations })

//     await User.create(data)

//     return true;
//   }

//   public async login({ request, response, auth }: HttpContextContract) {

//     const password = await request.
//     const password = await request.input('password')
//     const email = await request.input('email')

//     try {
//       const token = await auth.use('api').attempt(email, password)
//       return token.toJSON()
//     } catch {
//       return response
//         .status(400)
//         .send({ error: { message: 'Email no encontrado' } })
//     }
//   }

//   //   logout function
//   public async logout({ auth, response }: HttpContextContract) {
//     await auth.logout()
//     return response.status(200)
//   }

// }
