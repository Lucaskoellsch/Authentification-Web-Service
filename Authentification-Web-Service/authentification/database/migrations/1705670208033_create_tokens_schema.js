'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTokensSchema extends Schema {
  up () {
    this.create('create_tokens', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_tokens')
  }
}

module.exports = CreateTokensSchema
