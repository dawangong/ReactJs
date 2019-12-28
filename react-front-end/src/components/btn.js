import React, { Component } from 'react';
import propTypes from 'prop-types';

class Btn extends Component{

  static defaultProps = {
    name: '默认值'
  };

  static propTypes = {
    name: propTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...props
    }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo);
  }

  render() {
    return <button>{this.props.name}</button>
  }
}

export default Btn;
