import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Response from './Response'

export default class Discuss extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public moduleId: number

  @column()
  public userId: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public name: string

  @column()
  public image: string

  @column()
  public pinned: boolean

  @hasMany(() => Response)
  public discusses: HasMany<typeof Response>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
