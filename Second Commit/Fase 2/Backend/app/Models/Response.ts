import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Response extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public discussId: number

  @column()
  public userId: number

  @column()
  public content: string

  @column()
  public pinned: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
