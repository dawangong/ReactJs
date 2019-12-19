import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'mobx-react';
import store from './store/index'
import { configure } from "mobx";

ReactDOM.render(
  <Provider {...store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 启用严格模式 通过action 修改数据源
configure({
  enforceActions: 'observed'
});
