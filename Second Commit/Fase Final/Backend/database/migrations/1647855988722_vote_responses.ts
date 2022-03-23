import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VoteResponses extends BaseSchema {
  protected tableName = 'vote_responses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table
        .integer('response_id')
        .unsigned()
        .references('id')
        .inTable('responses')
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
