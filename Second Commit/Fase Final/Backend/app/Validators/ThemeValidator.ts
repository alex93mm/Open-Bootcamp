import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ThemeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string(),
    subtitle: schema.string(),
    image: schema.string(),
    courseId: schema.number([rules.exists({ table: 'courses', column: 'id' })]),
    pinned: schema.boolean(),
  })

  public messages = {}
}
