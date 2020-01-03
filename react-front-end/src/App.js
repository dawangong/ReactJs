import './App.scss';
import React, { Component } from 'react';
import routerConfig from './router/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Nav, Footer, Cat, Banner, Wave, FloatBoard, Info } from './components/index';
import ReactAplayer from 'react-aplayer';
import { musicApi } from './api/music'

class App extends Component {
  constructor () {
    super();
    const { pathname } = window.location;
    const index = routerConfig.map(({ path }) => path).indexOf(pathname);
    const key = index === -1 ? ['0'] : [String(index)];
    this.state = {
      defaultSelectedKeys: key,
      crumb: routerConfig[0].name,
      props: {
        theme: '#7fa0ff',
        lrcType: 3,
        mini: true,
        fixed: true,
        audio: []
      },
      showMusic: false
    };
  }

  componentDidMount() {
    const { props } = this.state;
    musicApi({
      server: 'netease',
      type: 'playlist',
      id: 2878443703
    }).then(item => {
      props.audio = item;
      console.log(props, 11);
      this.setState({
        props,
        showMusic: true
      })
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { props, showMusic } = this.state;
    return (
      <Router>
        <div className="page-container">
          <Cat />
          <FloatBoard />
          <p className="welcome-message">I'll be waiting for you!</p>
          {showMusic ? <ReactAplayer {...props} /> : <div> </div>}
          <Info />
          <Nav routerConfig={routerConfig} />
          < Banner />
          <div className="filter-dot"> </div>
          <Wave />
          <div className="page-content">
            {renderRoutes(routerConfig)}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }

  getNowSelect(e) {
    this.setState({
      crumb: routerConfig[e.key].name
    })
  }
}

export default App;
