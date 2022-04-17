import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SortValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    sort: schema.enum.optional([
      'id',
      'pinned',
      'updated_at',
      'created_at',
      'totalVotosPositivos',
      'totalVotosNegativos',
      'totalRespuestas',
    ]),
    order: schema.enum.optional(['asc', 'desc'] as const),
  })

  public messages = {}
}
