class _React {
  constructor(...args) {
    // 切割父子节点 初始化attrs
    let [attrs, [head, ...tail]] = [{}, args];
    // 切割tagName 和 className
    let [tag, ...classes] = head.split('.');
    console.log(!this.isRenderable(tail[0]));
    if (tail.length && !this.isRenderable(tail[0])) [attrs, ...tail] = tail;
    if (attrs.class) classes = [...classes, ...attrs.class];
    delete attrs.class;
    const children = [];
    const addChildren = v => v === null ? null : Array.isArray(v) ? v.map(addChildren) : children.push(v);
    addChildren(tail);
    return { __React: true, tag: tag || 'div', attrs, classes, children }
  }

  // 支持渲染的类型
  isRenderable(v) {
    return v === null || ['string', 'number'].includes(typeof v) || v.__React || Array.isArray(v)
  }
}

const React = (...arg) => new _React(...arg);
// module.exports = React;

export {
  React
}
