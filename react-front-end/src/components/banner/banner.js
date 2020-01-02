import React, { Component } from 'react';
import './banner.scss';
import { Carousel } from 'antd';
import huoying from '../../assets/images/huoying.jpg';

class Banner extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel autoplay={true} effect="fade" dots={false}>
        <div>
          <img src={huoying} alt="banner图"/>
        </div>
      </Carousel>)
  }
}

export default Banner;
