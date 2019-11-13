import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import routerConfig from './router/index';
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    {renderRoutes(routerConfig)}
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
