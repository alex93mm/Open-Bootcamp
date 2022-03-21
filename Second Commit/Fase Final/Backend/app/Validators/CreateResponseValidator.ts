import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ResponseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    content: schema.string(),
    userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    discussId: schema.number([rules.exists({ table: 'discusses', column: 'id' })]),
    pinned: schema.boolean(),
  })

  public messages = {}
}
