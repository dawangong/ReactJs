import React, { Component } from 'react';
// import { mainApi } from '../../api/index'
import { observer, inject } from 'mobx-react';
import { Button } from 'antd'
import { mainApi } from "../../api/index";

@inject('mainStore')
@observer
class Index extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.init();
  }

  init() {
    mainApi().then(data => {
      this.props.mainStore.init(data);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { mainStore } = this.props;
    return (
      <Button onClick={() => {mainStore.change('update')}}>{ mainStore.name }</Button>
    );
  }
}

export default Index;
