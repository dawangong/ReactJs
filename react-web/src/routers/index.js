import React from 'react';
import Test from '../views/test';
import { HashRouter, Switch, Route } from 'react-router-dom';

class RouterConfig extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path='/test' component={Test}/>
        </Switch>
      </HashRouter>
    )
  }
}
export default RouterConfig;

