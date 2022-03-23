import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Themes extends BaseSchema {
  protected tableName = 'themes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE')
      table.integer('module_id').unsigned().nullable()
      table.string('title').notNullable()
      table.string('subtitle').notNullable()
      table.string('image').nullable()
      table.boolean('pinned').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
