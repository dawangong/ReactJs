import './App.scss';
import React, { Component } from 'react';
import routerConfig from './router/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Nav, Footer, Cat } from './components/components';
import { Carousel } from 'antd';
import huoying from './assets/images/huoying.jpg';


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
        <div className="page-container">
          <Cat />
          <Nav routerConfig={routerConfig} />
          <Carousel autoplay={true} effect="fade" dots={false}>
            <div>
              <img src={huoying} alt="banner图"/>
            </div>
          </Carousel>
          <div className="filter-dot"> </div>
          <div className="wave">
            <div className="wave-1"> </div>
            <div className="wave-2"> </div>
          </div>
          <div className="page-content">
            {renderRoutes(routerConfig)}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
