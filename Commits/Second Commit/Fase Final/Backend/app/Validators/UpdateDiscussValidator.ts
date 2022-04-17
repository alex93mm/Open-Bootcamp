import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateDiscussValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional(),
    content: schema.string.optional(),
    userId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    themeId: schema.number.optional([rules.exists({ table: 'themes', column: 'id' })]),
    pinned: schema.boolean.optional(),
  })

  public messages = {}
}
