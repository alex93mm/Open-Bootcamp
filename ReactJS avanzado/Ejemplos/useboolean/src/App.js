import './App.css';
import Todolist from './components/lists/TodoList';
import Settings from './settings/Settings';

function App() {
  return (
    <div className="App">
      <Todolist/>
      <Settings/>
    </div>
  );
}

export default App;
