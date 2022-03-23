import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VoteDiscusses extends BaseSchema {
  protected tableName = 'vote_discusses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table
        .integer('discuss_id')
        .unsigned()
        .references('id')
        .inTable('discusses')
        .notNullable()
        .onDelete('CASCADE')
      table.boolean('positive').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
