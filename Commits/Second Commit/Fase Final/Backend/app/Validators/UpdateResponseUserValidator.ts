import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateResponseUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    content: schema.string.optional(),
    userId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    discussId: schema.number.optional([rules.exists({ table: 'discusses', column: 'id' })]),
  })

  public messages = {}
}
