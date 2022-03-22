import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')
  Route.post('auth/login', 'AuthController.login')

  Route.group(() => {
    Route.get('/cursos', 'CoursesController.index')
    Route.get('/cursos/:id', 'CoursesController.show')

    Route.get('/temas', 'ThemesController.index')
    Route.get('/temas/:id', 'ThemesController.show')

    Route.get('/preguntas', 'DiscussesController.index')
    Route.post('/preguntas', 'DiscussesController.store')
    Route.get('/preguntas/:id', 'DiscussesController.show')
    Route.patch('/preguntas/:id', 'DiscussesController.update')
    Route.delete('/preguntas/:id', 'DiscussesController.delete')

    Route.get('/respuestas', 'ResponsesController.index')
    Route.post('/respuestas', 'ResponsesController.store')
    Route.get('/respuestas/:id', 'ResponsesController.show')
    Route.patch('/respuestas/:id', 'ResponsesController.update')
    Route.delete('/respuestas/:id', 'ResponsesController.delete')

    Route.get('/votos', 'VotesController.index')

    Route.group(() => {
      Route.post('/cursos', 'CoursesController.store')

      Route.post('/temas', 'ThemesController.store')
      Route.patch('/temas/:id', 'ThemesController.update')
      Route.delete('/temas/:id', 'ThemesController.destroy')
    }).middleware('admin')
  }).middleware('auth')
}).prefix('openAPI/foro')
