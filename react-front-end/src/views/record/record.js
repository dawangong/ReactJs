import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import Btn from '../../components/btn'
import Btn2 from '../../components/btn-2'
import ListItem from '../../components/ListItem'
import { mainApi } from "../../api/about";
import './record.scss';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({forceRefresh: true});
export const { Provider, Consumer } = React.createContext("black");

@inject('mainStore')
@observer
class Record extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      name: "无状态",
      id: 1
    };
    const location = history.location;
    console.log(location);
    this.unlisten = history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state, 'history');
    });
    // history.push('/about', { some: 'state' });
    // history.go(1);
    this.myRef=  React.createRef();
    this.init();
  }

  init() {
    mainApi().then(data => {
      this.props.mainStore.init(data);
    }).catch(err => {
      console.log(err);
    });
  }

  change() {
    this.setState({
      name: '无状态组件',
      id: 2,
      class: 'btn'
    })
  }

  clickCb(log) {
    console.log(log);
  }

  render() {
    const { mainStore } = this.props;
    return (
      <div className="record">
        <p dangerouslySetInnerHTML={{__html: '&lt'}}></p>
        <button className={this.state.class} ref={(button) => { this.button = button }} onClick={() => { this.change() }}>更改</button>
        <Btn ref={(btn) => { this.btn = btn }} name={this.state.name} />
        <Btn2 name={this.state.name} key={this.state.id} clickCb={this.clickCb} />
        <Button ref={this.myRef} onClick={() => {mainStore.change('update')}}>{ mainStore.name }</Button>
        <ul>
          <Provider value="dark">
            <ListItem />
          </Provider>
        </ul>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return this.myRef.current
  }

  componentDidUpdate(prevProps, prevState, prevP) {
    console.log(this.myRef, 'componentDidUpdate', prevP);
    console.log(this.button, 'componentDidUpdate');
    console.log(this.btn, 'componentDidUpdate');
  }

  componentDidMount() {
    console.log(this.myRef, 'componentDidMount');
    console.log(this.button, 'componentDidMount');
    console.log(this.btn, 'componentDidMount');
    this.setState((prevState, props) => ({
      name: "无状态1",
      id: 2
    }), () => {
      console.log(this.state.id);
    });
    this.setState((prevState, props) => ({
      name: "无状态1",
      id: 3
    }), () => {
      console.log(this.state.id);
    });
    console.log(this.props);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.unlisten();
  }
}

export default Record;
