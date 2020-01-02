import React, { Component } from 'react';
import './info.scss';

class Info extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="info">
        <p className="title">"I know you're back~"</p>
        <div className="info-content">
          <a className="iconfont icon-yinle" href="https://music.163.com/#/user/home?id=363024719" target="_blank"></a>
          <a className="iconfont icon-youxiang" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=PAUNDQ4FDwkFCXxNTRJfU1E" target="_blank"></a>
          <a className="iconfont icon-csdn" href="https://blog.csdn.net/wangongda" target="_blank"></a>
          <a className="iconfont icon-githubb" href="https://github.com/dawangong" target="_blank"></a>
          <a className="iconfont icon-npm" href="https://www.npmjs.com/~dawangong" target="_blank"></a>
        </div>
      </div>
    )
  }
}

export default Info;
