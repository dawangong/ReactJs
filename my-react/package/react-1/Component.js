import { _render } from './reactDom';

class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  setState(stateChange) {
    Object.assign(this.state, stateChange);
    renderComponent(this);
  }
}
// 创建组件
const createComponent = (component, props) => {
  let inst;
  // 如果是类定义组件，则直接返回实例
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function() {
      return this.constructor(props);
    };
  }

  return inst;
};
// 设置组件
const setComponentProps = (component, props) => {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.base && component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;

  renderComponent(component);
};
// 渲染组件
const renderComponent = component => {
  let base;

  // render() return dom
  const renderer = component.render();
  console.log(renderer, 11);
  base = _render(renderer);

  // 触发生命周期
  if (component.base) {
    if (component.componentWillUpdate) component.componentWillUpdate();
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else {
    component.base = base;
    component.componentDidMount && component.componentDidMount();
    if (component.base && component.base.parentNode) {
      component.base.parentNode.replaceChild(base, component.base);
    }
    return;
  }
  // 节点更新
  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }
  //base是真实dom对象
  //component.base是将本次渲染好的dom对象挂载到组件上，方便判断是否首次挂载
  component.base = base;
  //互相引用，方便后期的队列处理
  base._component = component;
};

export {
  Component,
  createComponent,
  setComponentProps,
  renderComponent
}
