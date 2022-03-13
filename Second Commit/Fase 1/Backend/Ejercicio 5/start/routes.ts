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
import { login, register } from 'App/Controllers/Http/Users/UserControllers';
import Course from 'App/Models/Course';
import User from 'App/Models/User';

Route.get('/users', async () => {
  return User.all();
})

Route.get('/courses', async () => {
  return Course.all()
})

//TODO: Gestionar la recepcion de parametros por HTTPRequest
Route.post("/login" , async () => {
  return login("rodrigoleal@gmail.com", "1234asdf5")
})

Route.post("/register" , async () => {
  return register("nuevocorreoinventado@gmail.com", "1234asdf5")
})
