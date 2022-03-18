import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')
  Route.post('auth/login', 'AuthController.login')

  Route.group(() => {
    Route.get('/cursos/:id', 'CoursesController.show')
    Route.get('/cursos', 'CoursesController.index')

    Route.get('/temas/:id', 'ThemesController.show')
    Route.get('/temas', 'ThemesController.index')

    Route.post('/preguntas', 'DiscussesController.store')

    Route.post('/cursos', 'CoursesController.store').middleware('admin')
    Route.post('/temas', 'ThemesController.store')
  }).middleware('auth')
}).prefix('openAPI/foro')
