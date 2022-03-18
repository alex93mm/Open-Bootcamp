import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CoursesNotifications extends BaseSchema {
  protected tableName = 'courses_notifications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.integer('notification_id').references('notifications.id')
      table.integer('user_id').references('users.id')
      table.integer('course_id').references('courses.id')

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
