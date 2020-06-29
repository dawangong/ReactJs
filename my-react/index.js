import React from './package/react-1/React';
import { ReactDom } from './package/react-1/ReactDom';
import App from './app'
ReactDom.render(
  <App/>,
  document.querySelector('#app')
);
