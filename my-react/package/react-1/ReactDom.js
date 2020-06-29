import { getType, setAttribute } from './base';
import { setComponentProps, createComponent } from './Component';
// ReactDom
const ReactDom = {};
// 真实dom挂载
const render = (vnode, container) => container.appendChild(_render(vnode));
// 虚拟dom 渲染为 真实dom
const _render = vnode => {

  const emptyFn = () => vnode = '';

  const renderMap = ["[object Null]", "[object Boolean]", "[object Undefined]"];

  const type = getType(vnode);
  if(renderMap.includes(type)) emptyFn();
  if(type === "[object Number]") {
    vnode = String(vnode)
  }

  if(type === "[object String]") {
    return document.createTextNode(vnode);
  }

  if(getType(vnode.tag) === "[object Function]") {
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    });
  }

  // 递归深度优先节点插入
  vnode.children && vnode.children.forEach(child => render(child, dom));

  return dom
};
// 挂载方法
ReactDom.render = render;

export {
  _render,
  ReactDom
};
