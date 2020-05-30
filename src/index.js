import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/app';
import * as serviceWorker from './app/serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();