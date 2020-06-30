import React from './package/react-base/React';
import { ReactDom } from './package/react-base/ReactDom';
import App from './app'
ReactDom.render(
  <App/>,
  document.querySelector('#app')
);
