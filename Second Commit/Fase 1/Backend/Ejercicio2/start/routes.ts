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
import { loginUser, registerUser } from 'App/Controllers/UserController';
import { allUsers } from 'Database/UserBBDD'

Route.get('/', async () => {
  return allUsers; 
})

Route.get('/login', async () => {
  return loginUser('alejandro93mm@gmail.com', '1234'); // Returns -2 - Incorrect password
  // return loginUser('noexiste@gmail.com', '12345'); // Returns -1 - Email dosnt exist
  // return loginUser('alejandro93mm@gmail.com', '12345'); // Returns 1 - Email and pass correct
})

Route.get('/register', async () => {
  return registerUser('alejandro93mm@gmail.com', '12345'); // First time true
})
