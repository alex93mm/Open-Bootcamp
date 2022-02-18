import './App.css';
import LoginFormContainer from './components/containers/LoginFormContainer';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/filter/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodoContainer></TodoContainer> */}
        {/* <TodoFormContainer></TodoFormContainer> */}
        {/* <Filteroptions></Filteroptions> */}
        <LoginFormContainer></LoginFormContainer>
      </header>
    </div>
  );
}

export default App;
