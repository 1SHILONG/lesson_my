// const clone = require('./util');
import clone from './util.js' // es6

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
}; 
target.target = target; // 循环引用  栈溢出 递归

console.log(clone(target));


