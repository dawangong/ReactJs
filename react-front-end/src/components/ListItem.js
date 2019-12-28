import React, { Component, Fragment } from 'react';
import { Consumer } from '../views/record/record'
import Child from './child';
import reactDOM from 'react-dom'

class ListItem extends Component{
  constructor(props) {
    super(props);
    this.state ={
      is: true
    };
    this.dom = document.createElement('div');
  }

  render() {
    if(!this.state.is) {
      return null
    }
    return (
      <Consumer>
        { value => { return (
          <Fragment>
          {[1,2,3].map((item, index) => <li key={index}>{item}</li>)}
          {this.state.is && <div>true</div>}
          {this.state.is ? <div>1</div> : <div>2</div>}
          <p>{value}</p>
          {reactDOM.createPortal(
            <Child />,
            this.dom
          )}
          {React.Children.map(this.props.children, item => <div>{item}</div>)}
        </Fragment>)
        }}
      </Consumer>
    )
  }

  componentDidMount() {
    this.el = document.querySelectorAll('.record')[0];
    this.el.appendChild(this.dom);
  }

  componentWillUnmount() {
    this.el.removeChild(this.dom);
  }

}

export default ListItem
