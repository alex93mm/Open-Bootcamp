/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/openAPI/foro/temas', "ModulesController.index").as("themes").middleware('auth')

Route.get('/', () => {
  return "Home page"
}).middleware('auth')

Route.group(() => {

  Route.group(()=> {

    Route.get('/register', "RegisterController.create")
    Route.post('/register', "RegisterController.store")

    Route.get('/login', "AuthController.create")
    Route.post('/login', "AuthController.store")

  }).middleware('guest')

  Route.post('/logout', 'AuthController.destroy').middleware('auth')

}).namespace('App/Controllers/Http/Auth').prefix('/openAPI/foro')
