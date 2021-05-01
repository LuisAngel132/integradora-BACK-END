'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reporte extends Model {
  static get table(){
    return 'reportes'
}
comentario () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Reporte
