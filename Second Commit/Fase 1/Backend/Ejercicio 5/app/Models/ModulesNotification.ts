import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ModulesNotification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public notificationId: number

  @column()
  public userId: number

  @column()
  public moduleId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
