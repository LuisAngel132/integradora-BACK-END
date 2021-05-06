'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportesSchema extends Schema {
  up () {
    this.create('reportes', (table) => {
      table.increments()
      table.integer('User_id').unsigned().references('id').inTable('users')
      table.integer('Sensor_temperatura')
      table.integer('Sensor_humedad')
      table.string('Enfrio')
      table.string('Rego')
      table.timestamps()
    })
  }

  down () {
    this.drop('reportes')
  }
}

module.exports = ReportesSchema
