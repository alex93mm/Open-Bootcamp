import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Discuss from './Discuss'

export default class Module extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public courseId: number

  @column()
  public name: string

  @column()
  public image: string

  @hasMany(() => Discuss)
  public discusses: HasMany<typeof Discuss>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
