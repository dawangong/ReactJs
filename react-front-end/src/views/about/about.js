import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <p>技术选型</p>
        <p>front-end：react + axios + react-browser-router + ant-design + (mobx + decorator)</p>
        <p>back-end：node + koa2 + mongodb</p>
        <p>数据获取</p>
        <p>local-mock：webpack-dev-server-before + express + mock.js</p>
        <p>back-end-mock：http-proxy-middleware + koa2 + mongodb</p>
        <p>server：nginx + koa2 + mongodb</p>
        <p>弃用</p>
        <p>react-hash-router、mysql、react-axios</p>
      </div>
    );
  }
}

export default About;
