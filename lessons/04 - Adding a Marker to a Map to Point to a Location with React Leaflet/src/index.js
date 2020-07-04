import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';

/**
 * Want to see the answer? Comment out the first App import
 * and uncomment out the answer in order to see it live.
 */

import App from './App';
// import App from './App.answer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);