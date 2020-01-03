import React, { Component } from 'react';
import './banner.scss';
import { Carousel } from 'antd';
import BannerAddress from './data';

class Banner extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Carousel autoplay={true} effect="fade" dots={false}>
        {BannerAddress.map(item => <div>
          <img src={item} alt="banner图"/>
        </div>)}
      </Carousel>)
  }
}

export default Banner;
