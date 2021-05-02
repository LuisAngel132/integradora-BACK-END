'use strict'

const plantavalidator = require('../app/Validators/plantavalidator');


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login','AuthController.login')
Route.post('/users','UserController.store')

Route.group(()=>{
Route.get('/perfil','UserController.Miperfil')
Route.get('/reporte/','ReporteController.reporte')
Route.post('/plantafoto/:id','PlantaController.Foto')
Route.delete('/logout','AuthController.logout')
Route.get('/user','ReporteController.Userid')

}).middleware('auth');
Route.post('/reporte','ReporteController.store')
