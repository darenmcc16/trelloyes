import React from 'react';
import './index.css';
import App from './App';
import STORE from './STORE';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <App store = {STORE} />,
  document.getElementById('root'),
)