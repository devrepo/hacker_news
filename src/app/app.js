import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reset from './reset_css';
import "./app.scss"

import store from './store';
import { Board } from '../hacker_feed';

const GlobalStyle = createGlobalStyle`${reset}`;


function App() {
  return (
    <div>
      <Provider store={store}>
            <Route path="/" exact render={( props ) => ( <Board {...props}/> )} />
      </Provider>
      <GlobalStyle />
    </div>
  );
} 

export default App;
