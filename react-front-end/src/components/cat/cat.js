import React, { Component } from 'react';
import './cat.scss';
import { throttle } from 'lodash-decorators';

class Cat extends Component{

  constructor(props) {
    super(props);
    this.state = {
      showCat: false
    };
  }

  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener('scroll', (e) => {
      this.onScroll(e);
    })
  }

  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', (e) => {
      this.onScroll(e);
    });
  }

  render() {
    const { showCat } = this.state;
    return (
      <div className={`cat ${showCat ? 'showCat' : ''}`}> </div>)
  }

  @throttle(300)
  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    const showCat = scrollTop > 50;

    if (showCat !== this.state.showCat) {
      this.setState({
        showCat
      });
    }
  }
}

export default Cat;
