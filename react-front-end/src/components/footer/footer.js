import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <img src="https://lc-losb6sly.cn-n1.lcfile.com/81c3a17501b78967169c/beianicon.png" alt="图标"/>
        <a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=HVrfq3m52z7zGq7sXM3BNKVUV67CENnvftr1N5FoqCx4c7ccWWSd!1958385134">陕ICP备19023264号 © 2019</a>
      </div>)
  }
}

export default Footer;
