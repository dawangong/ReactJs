import Component from './Component';

const React = {};
React.Component = Component;
React.createElement = function(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  };
};
export default React;
