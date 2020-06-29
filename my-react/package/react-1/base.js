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

export {
  getType,
  setAttribute
}
