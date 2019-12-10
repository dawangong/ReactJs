import './App.scss';
import React, { Component } from 'react';
import routerConfig from './router/index';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { renderRoutes } from 'react-router-config';

const { Header, Content, Footer } = Layout;

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
          <Footer style={{ textAlign: 'center' }}>
            <img src="https://lc-losb6sly.cn-n1.lcfile.com/81c3a17501b78967169c/beianicon.png" style={{height: "15px", lineHeight: "15px", marginRight: "10px", marginBottom: "3px"}} alt="图标"/>
            <a style={{color: "black"}} href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=HVrfq3m52z7zGq7sXM3BNKVUV67CENnvftr1N5FoqCx4c7ccWWSd!1958385134">陕ICP备19023264号 © 2019</a>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
