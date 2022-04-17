import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VotesDiscusses extends BaseSchema {
  protected tableName = 'votes_discusses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.integer('discuss_id').references('discusses.id')
      table.integer('user_id').references('users.id')
      table.boolean('like_dislike').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
