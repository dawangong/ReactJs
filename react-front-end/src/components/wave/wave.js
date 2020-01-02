import React, { Component } from 'react';
import './wave.scss';

class Wave extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wave">
        <div className="wave-1"> </div>
        <div className="wave-2"> </div>
      </div>
    )
  }
}

export default Wave;
