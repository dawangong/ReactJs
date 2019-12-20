import { observable, action } from 'mobx';

class MainStore {
  @observable name = '';

  @action
  init(name) {
    this.name = name;
  }

  @action
  change(name) {
    this.name = this.name + name;
  }
}

export default new MainStore();
