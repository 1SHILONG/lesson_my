/**
 * @func 判断 left是否是rigth的实例
 * @param {*} left  :  对象;
 * @param {*} right  对象
 * @return  boolean
 */
function myInstanceof(left,right) {
   // right 只要出现在left 原型链的任何一栈都可以
   // return left instanceof right
   while(true) {
      if(left === null) {
      // left __proto__ 原型查找 一直进行下去
      if(left.__proto__ === right.prototyper) {
         return true;
      }
      left = left.__proto__;
   }
}
}
myInstanceof(aTao,Person);