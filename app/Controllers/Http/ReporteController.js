'use strict'
const Reporte = use('App/Models/Reporte')
const Database = use('Database')

class ReporteController {
  async store({ request,response})
  {

      const userData = request.only(['User_id','Sensor_temperatura','Sensor_humedad','Frio','Calor'])
      const user = await Reporte.create(userData)

      return response.created({
          status : true,
          data : user
      })

  }
  async reporte({response,params=id}){
    const id = params.id
    const reporte = await Database.table('reportes').select('*').where('User_id',id)

    return response.json(

        reporte

    )

  }
}

module.exports = ReporteController
