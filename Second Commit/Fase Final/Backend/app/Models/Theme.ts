import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Course from './Course'
import Discuss from './Discuss'

export default class Theme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public courseId: number

  @column()
  public title: string

  @column()
  public subtitle: string

  @column()
  public image: string

  @column()
  public pinned: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>

  @hasMany(() => Discuss)
  public discusses: HasMany<typeof Discuss>

  // public static visibleTo = scope((query, user: User) => {
  //   if (user === undefined) {
  //     return
  //   }
  //   if (user.role === 'admin') {
  //     return
  //   }
  //   user.courses.map((course) => {
  //     query.if('courseId', (subQuery) => {
  //       subQuery.where('courseId', course.id)
  //     })
  //   })
  // })
}
