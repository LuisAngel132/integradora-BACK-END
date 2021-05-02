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
  async reporte({response,auth}){
    const reporte = await Database.table('reportes').select('*').where('User_id',auth.user.id)

    return response.json(

        reporte
        
    )

  }
  async Userid({response,auth}){
    const  id = auth.user.id

     return response.json(
        id

     )

   }
}


module.exports = ReporteController
