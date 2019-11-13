import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import routerConfig from './router/index';
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ul>
      <li><Link to="/">app</Link></li>
      <li><Link to="/test/1">test</Link></li>
      <li><Link to="/404">404</Link></li>
    </ul>
    {renderRoutes(routerConfig)}
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
