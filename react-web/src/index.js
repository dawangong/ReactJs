import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import routerConfig from './router/index';
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const defaultSelectedKeys = ['0'];

let crumb = routerConfig[defaultSelectedKeys[0]].name;
const getNowSelect = e => {
  crumb = routerConfig[e.key].name;
};

ReactDOM.render(
  <Router>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          onSelect={getNowSelect}
          style={{ lineHeight: '64px' }}
        >
          {routerConfig.slice(0, routerConfig.length - 1).map(({ path, name }, index) =>
            <Menu.Item key={index}><Link to={path}>{name}</Link></Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{crumb}</Breadcrumb.Item>
          {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
          {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
          {renderRoutes(routerConfig)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
