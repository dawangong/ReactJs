import './App.scss';
import React, { Component } from 'react';
import routerConfig from './router/index';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { renderRoutes } from 'react-router-config';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor (prop) {
    super(prop);
    const { pathname } = window.location;
    const index = routerConfig.map(({ path }) => path).indexOf(pathname);
    this.state = {
      defaultSelectedKeys: index === -1 ? ["0"] : [String(index)],
      crumb: routerConfig[0].name
    };
    console.log(this.state);
  }
  getNowSelect(e) {
    this.setState({
      crumb: routerConfig[e.key].name
    })
  }
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={this.state.defaultSelectedKeys}
              onSelect={e => {
                this.getNowSelect(e);
              }}
              style={{ lineHeight: '64px' }}
            >
              {routerConfig.slice(0, routerConfig.length - 1).map(({ path, name }, index) =>
                <Menu.Item style={{ cursor: 'point' }} key={index}><Link to={path}>{name}</Link></Menu.Item>
              )}
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.crumb}</Breadcrumb.Item>
              {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
              {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
              {renderRoutes(routerConfig)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>created by dawangong(@126.com) in 2019</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
