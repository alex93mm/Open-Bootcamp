import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DiscussValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string(),
    content: schema.string(),
    userId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    themeId: schema.number([rules.exists({ table: 'themes', column: 'id' })]),
    pinned: schema.boolean(),
  })

  public messages = {}
}
