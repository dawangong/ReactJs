import './App.scss';
import React, { Component } from 'react';
import routerConfig from './router/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Nav, Footer } from './components/components';

class App extends Component {
  constructor () {
    super();
    const { pathname } = window.location;
    const index = routerConfig.map(({ path }) => path).indexOf(pathname);
    const key = index === -1 ? ['0'] : [String(index)];
    this.state = {
      defaultSelectedKeys: key,
      crumb: routerConfig[0].name
    };
  }
  getNowSelect(e) {
    this.setState({
      crumb: routerConfig[e.key].name
    })
  }
  render() {
    return (
      <Router>
        <Nav routerConfig={routerConfig} />
        <div className="content">
          {renderRoutes(routerConfig)}
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
