// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"package/react-1/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttribute = exports.getType = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 识别数据类型
var getType = function getType(a) {
  return Object.prototype.toString.call(a);
}; // 设置属性


exports.getType = getType;

var setAttribute = function setAttribute(dom, name, value) {
  // 转换为class
  if (name === 'className') name = 'class'; // 事件

  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || ''; // 样式
  } else if (name === 'style') {
    // 字符串形式写样式
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && _typeof(value) === 'object') {
      // 对象形式写样式
      for (var _name in value) {
        dom.style[_name] = typeof value[_name] === 'number' ? value[_name] + 'px' : value[_name];
      }
    }
  } else {
    // 赋值 不存在不会添加属性
    if (name in dom) {
      dom[name] = value || '';
    } // 赋值并添加属性


    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }
};

exports.setAttribute = setAttribute;
},{}],"package/react-1/reactDom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDom = exports._render = void 0;

var _base = require("./base");

var _Component = require("./Component");

// ReactDom
var ReactDom = {}; // 真实dom挂载

exports.ReactDom = ReactDom;

var render = function render(vnode, container) {
  return container.appendChild(_render(vnode));
}; // 虚拟dom 渲染为 真实dom


var _render = function _render(vnode) {
  var emptyFn = function emptyFn() {
    return vnode = '';
  };

  var renderMap = ["[object Null]", "[object Boolean]", "[object Undefined]"];
  var type = (0, _base.getType)(vnode);
  if (renderMap.includes(type)) emptyFn();

  if (type === "[object Number]") {
    vnode = String(vnode);
  }

  if (type === "[object String]") {
    return document.createTextNode(vnode);
  }

  if ((0, _base.getType)(vnode.tag) === "[object Function]") {
    var component = (0, _Component.createComponent)(vnode.tag, vnode.attrs);
    (0, _Component.setComponentProps)(component, vnode.attrs);
    return component.base;
  }

  var dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      (0, _base.setAttribute)(dom, key, value);
    });
  } // 递归深度优先节点插入


  vnode.children && vnode.children.forEach(function (child) {
    return render(child, dom);
  });
  return dom;
}; // 挂载方法


exports._render = _render;
ReactDom.render = render;
},{"./base":"package/react-1/base.js","./Component":"package/react-1/Component.js"}],"package/react-1/Component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderComponent = exports.setComponentProps = exports.createComponent = exports.Component = void 0;

var _reactDom = require("./reactDom");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    this.state = {};
    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(stateChange) {
      Object.assign(this.state, stateChange);
      renderComponent(this);
    }
  }]);

  return Component;
}(); // 创建组件


exports.Component = Component;

var createComponent = function createComponent(component, props) {
  var inst; // 如果是类定义组件，则直接返回实例

  if (component.prototype && component.prototype.render) {
    inst = new component(props); // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;

    inst.render = function () {
      return this.constructor(props);
    };
  }

  return inst;
}; // 设置组件


exports.createComponent = createComponent;

var setComponentProps = function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.base && component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;
  renderComponent(component);
}; // 渲染组件


exports.setComponentProps = setComponentProps;

var renderComponent = function renderComponent(component) {
  var base; // render() return dom

  var renderer = component.render();
  console.log(renderer, 11);
  base = (0, _reactDom._render)(renderer); // 触发生命周期

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
  } // 节点更新


  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  } //base是真实dom对象
  //component.base是将本次渲染好的dom对象挂载到组件上，方便判断是否首次挂载


  component.base = base; //互相引用，方便后期的队列处理

  base._component = component;
};

exports.renderComponent = renderComponent;
},{"./reactDom":"package/react-1/reactDom.js"}],"package/react-1/React.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component = require("./Component");

var React = {};
React.Component = _Component.Component;

React.createElement = function (tag, attrs) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
};

var _default = React;
exports.default = _default;
},{"./Component":"package/react-1/Component.js"}],"package/react-1/ReactDom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDom = exports._render = void 0;

var _base = require("./base");

var _Component = require("./Component");

// ReactDom
var ReactDom = {}; // 真实dom挂载

exports.ReactDom = ReactDom;

var render = function render(vnode, container) {
  return container.appendChild(_render(vnode));
}; // 虚拟dom 渲染为 真实dom


var _render = function _render(vnode) {
  var emptyFn = function emptyFn() {
    return vnode = '';
  };

  var renderMap = ["[object Null]", "[object Boolean]", "[object Undefined]"];
  var type = (0, _base.getType)(vnode);
  if (renderMap.includes(type)) emptyFn();

  if (type === "[object Number]") {
    vnode = String(vnode);
  }

  if (type === "[object String]") {
    return document.createTextNode(vnode);
  }

  if ((0, _base.getType)(vnode.tag) === "[object Function]") {
    var component = (0, _Component.createComponent)(vnode.tag, vnode.attrs);
    (0, _Component.setComponentProps)(component, vnode.attrs);
    return component.base;
  }

  var dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      (0, _base.setAttribute)(dom, key, value);
    });
  } // 递归深度优先节点插入


  vnode.children && vnode.children.forEach(function (child) {
    return render(child, dom);
  });
  return dom;
}; // 挂载方法


exports._render = _render;
ReactDom.render = render;
},{"./base":"package/react-1/base.js","./Component":"package/react-1/Component.js"}],"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _React = _interopRequireDefault(require("./package/react-1/React"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      test: 'init'
    };
    _this.test = [1, 2, 3];
    return _this;
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.setState({
        test: 'test'
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('mount');
      this.setState({
        test: 'mount'
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('willMount');
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log('willupdate');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('didupdate');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _React.default.createElement("div", null, _React.default.createElement("span", null, this.state.test), _React.default.createElement("button", {
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, "\u6539\u53D8\u72B6\u6001"));
    }
  }]);

  return App;
}(_React.default.Component);

var _default = App;
exports.default = _default;
},{"./package/react-1/React":"package/react-1/React.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _React = _interopRequireDefault(require("./package/react-1/React"));

var _ReactDom = require("./package/react-1/ReactDom");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ReactDom.ReactDom.render(_React.default.createElement(_app.default, null), document.querySelector('#app'));
},{"./package/react-1/React":"package/react-1/React.js","./package/react-1/ReactDom":"package/react-1/ReactDom.js","./app":"app.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61863" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/my-react.e31bb0bc.js.map