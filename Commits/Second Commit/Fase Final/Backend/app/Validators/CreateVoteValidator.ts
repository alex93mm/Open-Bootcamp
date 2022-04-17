import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VoteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    userId: schema.number(),
    positive: schema.boolean(),
    discussId: schema.number.optional([rules.exists({ table: 'discusses', column: 'id' })]),
    responseId: schema.number.optional([rules.exists({ table: 'responses', column: 'id' })]),
  })

  public messages = {}
}
