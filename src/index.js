// -------------------- Libraries ---------------------
import React from 'react';
import ReactDOM from 'react-dom';
// ------------------- Files ---------------------------
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Own Styles
import './css/index.css';
// App file
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
