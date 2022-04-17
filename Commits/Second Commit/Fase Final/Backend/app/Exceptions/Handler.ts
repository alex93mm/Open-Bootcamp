import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error, ctx: HttpContextContract) {
    if (error.code === 'E_ROW_NOT_FOUND') {
      return ctx.response.notFound({ message: 'No encontrado' })
    }

    if (error.code === 'E_UNATHORIZED_ACCESS') {
      return ctx.response.unauthorized({ message: 'No autenticado' })
    }

    return super.handle(error, ctx)
  }
}
