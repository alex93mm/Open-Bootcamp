import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Theme from './Theme'
import User from './User'
import Response from './Response'
import VoteDiscuss from './VoteDiscuss'

export default class Discuss extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public pinned: boolean

  @column()
  public themeId: number

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Theme)
  public theme: BelongsTo<typeof Theme>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Response)
  public responses: HasMany<typeof Response>

  @hasMany(() => VoteDiscuss)
  public votediscusses: HasMany<typeof VoteDiscuss>
}
