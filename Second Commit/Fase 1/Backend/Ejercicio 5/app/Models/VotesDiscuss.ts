import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VotesDiscuss extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public discussId: number

  @column()
  public userId: number

  @column()
  public likeDislike: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
