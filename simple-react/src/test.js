// const React = require('./react-1');
import { React } from './react-1';

const res = React('div .demo', [
  React('h3', 'ToDo示例'),
  React('input', { placeholder: '添加todo' }),
  React('button',
    {
      onclick: (e) => {
        console.log(1);
      }
    }
  )
]);

console.log(res);
