import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Discuss from './Discuss'
import Response from './Response'
import VoteDiscuss from './VoteDiscuss'
import VoteResponse from './VoteResponse'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public role: string

  @column()
  public avatar: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Discuss)
  public discusses: HasMany<typeof Discuss>

  @hasMany(() => VoteDiscuss)
  public votediscusses: HasMany<typeof VoteDiscuss>

  @hasMany(() => Response)
  public responses: HasMany<typeof Response>

  @hasMany(() => VoteResponse)
  public voteresponses: HasMany<typeof VoteResponse>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
