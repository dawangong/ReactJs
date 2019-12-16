import React, { Component } from 'react';
import { mainApi } from '../../api/index'
// import { Button } from 'antd'

class Index extends Component {
  constructor(prop) {
    super(prop);
    mainApi().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>111</div>
    );
  }
}

export default Index;
