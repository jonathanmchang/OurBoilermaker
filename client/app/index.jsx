import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import { Provider } from 'react-redux';
import store from './store';
import '../../public/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
