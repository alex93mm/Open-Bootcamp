import logo from './logo.svg';
import './App.css';
import { Clockfunctional } from './components/clockFunctional';
import Clock from './components/clockClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>
        <Clockfunctional></Clockfunctional>
      </header>
    </div>
  );
}

export default App;
