import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discusses extends BaseSchema {
  protected tableName = 'discusses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('content').notNullable()
      table.boolean('pinned').notNullable()
      table.integer('theme_id').unsigned().references('id').inTable('themes').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
