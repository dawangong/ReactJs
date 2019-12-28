import React, { Component } from 'react';
import avatar from '../../assets/images/avataaars.svg'
import './index.scss';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="index">
        <img src={avatar} className="avatar" alt="avatar" />
        <h1>WELCOME TO MY WORLD</h1>
        <p>A FRONT END CODER</p>
      </div>
    );
  }
}

export default Index;
