import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <p>技术选型</p>
        <p>front-end：react-axios + react-browser-router + ant-design + (mobx + decorator)</p>
        <p>back-end：node + koa2 + mysql</p>
        <p>反向代理</p>
        <p>local：dev-server-proxy</p>
        <p>server: nginx</p>
      </div>
    );
  }
}

export default About;
