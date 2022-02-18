import logo from './logo.svg';
import './App.css';
import Contactlist from './components/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contactlist></Contactlist>
      </header>
    </div>
  );
}

export default App;
