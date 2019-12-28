import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return <p>我是子元素</p>
  }
}

export default Child;
