import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DiscussesNotification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public notificationId: number

  @column()
  public userId: number

  @column()
  public discussId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
