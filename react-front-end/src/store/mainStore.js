import { observable, action } from 'mobx';

class MainStore {
  @observable name = 'index';

  @action
  change(data) {
    this.name = this.name + data;
  }
}

export default new MainStore();
