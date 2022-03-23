import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Responses extends BaseSchema {
  protected tableName = 'responses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('content')
      table.boolean('pinned')
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table
        .integer('discuss_id')
        .unsigned()
        .references('id')
        .inTable('discusses')
        .notNullable()
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
