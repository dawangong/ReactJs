import Component from "./Component";
import { _render } from './reactDom';
import { diffNode } from './diff';

// 识别数据类型
const getType = a => Object.prototype.toString.call(a);
// 设置属性
const setAttribute = (dom, name, value) => {
  // 转换为class
  if (name === 'className') name = 'class';
  // 事件
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
    // 样式
  } else if (name === 'style') {
    // 字符串形式写样式
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      // 对象形式写样式
      for (let name in value) {
        dom.style[name] =
          typeof value[name] === 'number' ? value[name] + 'px' : value[name];
      }
    }
  } else {
    // 赋值 不存在不会添加属性
    if (name in dom) {
      dom[name] = value || '';
    }
    // 赋值并添加属性
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }
};
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

  // render() return v-dom
  const renderer = component.render();
  // base = _render(renderer);
  base = diffNode(component.base, renderer);

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
  getType,
  setAttribute,
  createComponent,
  setComponentProps,
  renderComponent
}
