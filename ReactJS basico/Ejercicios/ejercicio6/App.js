import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Taskspage from './pages/tasks/TasksPage';

function App() {

  let loggedIn = true;


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={
            loggedIn ? 
              (<Navigate to='/tasks'/>) 
            : (<Navigate to='/login'/>)
          } />
          <Route exact path='/tasks' element={
            loggedIn ? 
              (<Taskspage/>)
            : (<Navigate to='/login'/>)
          } />  
          <Route exact path='/login' element={
             <Loginpage/>
          } />
          <Route exact path='/register' element={
             <Registerpage/>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
