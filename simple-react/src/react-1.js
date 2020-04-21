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

  // Call with a (real) DOM element and a virtual one.
  // Sets the attributes and classes on the real element to those of the
  // virtual one - but only as it needs to.
  update(el, v) {
    if (!v.__React) return el.data === `${v}` || (el.data = v);
    // set the class names
    for (const name of v.classes) if (!el.classList.contains(name)) el.classList.add(name);
    for (const name of el.classList) if (!v.classes.includes(name)) el.classList.remove(name);
    // set the attributes
    for (const name of Object.keys(v.attrs)) if (el[name] !== v.attrs[name]) el[name] = v.attrs[name];
    for (const { name } of el.attributes) if (!Object.keys(v.attrs).includes(name) && name !== 'class')        el.removeAttribute(name)
  }

  makeEl(v) {
    return v.__React ? document.createElement(v.tag) : document.createTextNode(v);
  }

  // Given a real DOM element and a virtual one:
  //
  // a) Get the children of each: olds and news
  // b) Remove the excess olds
  // c) For each of the new virtual elements:
  //   1) Get the matching old element (by index),
  //      if there isn't one, make a new element
  //   2) If there wasn't a matching old element,
  //      append the new one to the parent
  //   3) If there is a mismatch (either the tag
  //      name doesn't match, or there's an
  //      element != textNode), make a new element
  //      and replace the matching one on the parent
  //   4) Update the attributes/classes on the element
  //   5) Recurse through the child's children etc.
  //
  // Note that this makes appending to lists of elements
  // very efficient, but prepending will be O[n]

  render(parent, v) {
    const olds = parent.childNodes || [];  // a)
    const news = v.children || [];  // a)
    for (const _ of Array(Math.max(0, olds.length - news.length))) parent.removeChild(parent.lastChild)  // b)
    for (const [i, child] of news.entries()){  // c)
      let el = olds[i] || this.makeEl(child);  // 1)
      if (!olds[i]) parent.appendChild(el);  // 2)
      const mismatch = (el.tagName || '') !== (child.tag || '').toUpperCase();  // 3)
      if (mismatch) (el = this.makeEl(child)) && parent.replaceChild(el, olds[i]);  // 3)
      this.update(el, child);  // 4)
      this.render(el, child);  // 5)
    }
  }
}

const React = (...arg) => new _React(...arg);
// module.exports = React;

export {
  React
}
