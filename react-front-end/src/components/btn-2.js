import React, { Component } from 'react';
import propTypes from 'prop-types';

class Btn2 extends Component{

  static defaultProps = {
    name: '默认值',
    clickCb: () => {}
  };

  static propTypes = {
    name: propTypes.string,
    clickCb: propTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    return <button onClick={() => {this.props.clickCb('我被点了！！！')}}>{this.state.name}</button>
  }
}

export default Btn2;
