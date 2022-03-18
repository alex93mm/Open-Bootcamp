import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import argon2  from 'argon2'

export default class AuthController {

  public create (ctx: HttpContextContract){

    return User.query()

  }


  public async store({request, session, response, auth}: HttpContextContract){

    const { email, password, remember } = await request.validate(LoginValidator)

    // try{
    //   await auth.attempt(email, password, remember)
    // } catch(error){

    //   if(error.responseText.includes("Password")){
    //     return -2;
    //   }
    //   return -1;
    // }

    // session.flash({
    //   alert: {
    //     type: 'info',
    //     message: "Welcome back"
    //   }
    // })

    // return 1;

    const user = await User.query().where('email', email).first();

    if(user){

      const passwordVerified = await argon2.verify(user.password, password)

      if(passwordVerified){

        await auth.login(user, remember)

        const intendedUrl = session.get('intended_url', false)

        if(intendedUrl){
          const redirectToIntendedUrl = response.redirect(intendedUrl)

          session.forget('intended_url')

          return redirectToIntendedUrl
        }

        return 1;

      }

      return -2;

    }

    return -1;

  }


  public async destroy ({auth, response}: HttpContextContract){
    await auth.logout()

    return response.redirect('/login')
  }


}
