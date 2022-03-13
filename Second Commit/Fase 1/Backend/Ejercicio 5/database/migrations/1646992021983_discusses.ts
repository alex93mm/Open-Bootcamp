import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discusses extends BaseSchema {
  protected tableName = 'discusses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('title', 150).notNullable()
      table.string('content', 500).notNullable()
      table.integer('module_id').references('modules.id')
      table.integer('user_id').references('users.id')
      table.boolean('pinned').defaultTo(false)

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
