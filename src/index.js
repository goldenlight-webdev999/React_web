import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import 'helpers/initFA';
import './language/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('main')
);
