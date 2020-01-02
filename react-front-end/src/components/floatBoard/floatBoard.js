import React, { Component } from 'react';
import './floatBoard.scss';
import Greetings from './data';

class FloatBoard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nowGreet: Greetings[0].text
    };
    this.index = 1;
  }

  componentDidMount() {
    this.initGreet();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { nowGreet } = this.state;
    return (
      <div className="float-board">{nowGreet}</div>
    )
  }

  initGreet () {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      if (this.index === 5) {
        this.index = 0;
      }
      this.index ++;
      this.setState({
        nowGreet: Greetings[this.index].text
      });
    }, 10000)
  }
}

export default FloatBoard;
