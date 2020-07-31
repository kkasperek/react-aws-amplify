import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import Amplify from 'aws-amplify';
import App from './App';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
