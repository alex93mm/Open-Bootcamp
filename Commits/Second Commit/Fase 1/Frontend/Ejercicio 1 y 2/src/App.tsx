import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ModulePage from './pages/ModulePage'
import { Link, Route } from 'wouter'
import RegisterPage from './pages/RegisterPage'

function App() {

  const token = sessionStorage.getItem('token') || localStorage.getItem('token')

  return (
    <div className="App">

      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <RegisterPage />
      </Route>
      <Route path='/home'>
        {/* <LoginPage /> */}
      <HomePage/>
      </Route>
      <Route path='/module'>
        {/* <RegisterPage /> */}
      <ModulePage/>
      </Route>
    </div>
  )
}

export default App
