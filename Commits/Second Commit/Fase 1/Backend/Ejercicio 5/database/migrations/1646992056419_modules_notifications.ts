import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ModulesNotifications extends BaseSchema {
  protected tableName = 'modules_notifications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.integer('notification_id').references('notifications.id')
      table.integer('user_id').references('users.id')
      table.integer('module_id').references('modules.id')

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
