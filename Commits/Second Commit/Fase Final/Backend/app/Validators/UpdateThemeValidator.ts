import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateThemeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional(),
    subtitle: schema.string.optional(),
    image: schema.string.optional(),
    courseId: schema.number.optional([rules.exists({ table: 'courses', column: 'id' })]),
    pinned: schema.boolean.optional(),
  })

  public messages = {}
}
