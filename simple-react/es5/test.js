"use strict";

var _react = require("./react-1");

// const React = require('./react-1');
var res = (0, _react.React)('div .demo', [(0, _react.React)('h3', 'ToDo示例'), (0, _react.React)('input', {
  placeholder: '添加todo'
}), (0, _react.React)('button', {
  onclick: function onclick(e) {
    console.log(1);
  }
})]);
console.log(res);