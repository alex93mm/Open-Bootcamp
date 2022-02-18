import './App.css';
import Loginusereducer from './components/login/loginUseReducer';
// import Counter from './components/Counter'
// import Loginusestate from './components/login/loginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Examples</h1>
        {/* <Counter></Counter> */}
        {/* <Loginusestate></Loginusestate> */}
        <Loginusereducer></Loginusereducer>
      </header>
    </div>
  );
}

export default App;
