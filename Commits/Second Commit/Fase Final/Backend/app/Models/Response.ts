import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Discuss from './Discuss'
import User from './User'
import VoteResponse from './VoteResponse'

export default class Response extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pinned: boolean

  @column()
  public content: string

  @column()
  public discussId: number

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Discuss)
  public discuss: BelongsTo<typeof Discuss>

  @hasMany(() => VoteResponse)
  public voteresponses: HasMany<typeof VoteResponse>
}
