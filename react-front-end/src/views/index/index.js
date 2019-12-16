import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'antd'

class Index extends Component {
  constructor(prop) {
    super(prop);
    axios.get("/api/main");
  }
  render() {
    return (
      <div>111</div>
    );
  }
}

export default Index;
