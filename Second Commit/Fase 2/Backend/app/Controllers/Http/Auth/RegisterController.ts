import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import RegisterValidator from 'App/Validators/RegisterValidator';

export default class RegisterController {

  // public create ({request}: HttpContextContract){
  //   return request;
  // }


  public async store ({ request, session, response}: HttpContextContract){

    try{
      const payload = await request.validate(RegisterValidator)
      await User.create(payload)
    } catch (error) {
      return false;
    }

    session.flash({
      alert: {
        type: 'success',
        message: 'Register successful'
      }
    })

    return true;

  }

}
