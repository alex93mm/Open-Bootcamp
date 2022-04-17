import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')
  Route.post('auth/login', 'AuthController.login')

  Route.group(() => {
    Route.resource('cursos', 'CoursesController').apiOnly().middleware({
      store: 'admin',
    })

    Route.resource('temas', 'ThemesController').apiOnly().middleware({
      store: 'admin',
      update: 'admin',
      destroy: 'admin',
    })

    Route.resource('preguntas', 'DiscussesController').apiOnly()
    Route.resource('preguntas.votos', 'VotesDiscussesController').apiOnly()

    Route.resource('respuestas', 'ResponsesController').apiOnly()
    Route.resource('respuestas.votos', 'VotesResponsesController').apiOnly()
  }).middleware('auth')
}).prefix('openAPI/foro')
