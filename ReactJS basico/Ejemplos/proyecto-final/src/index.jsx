// Imports React
// eslint-disable-next-line import/order
import App from './components/App';
import ReactDOM from 'react-dom';
// Imports Redux

// Imports stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';
import React from 'react';

// TODO: Si trabajamos con Redux crear el Store y aplicar el middleware de Redux Saga

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root'),
);
