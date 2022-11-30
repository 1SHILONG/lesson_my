// 定义 (封装)了 人 这个类
// 两种类的封装写法，
// js 正宗写法
// es5  基于对象的原型式
// 
let obj = {} //Object(构造函数)  Object.prototype  new Object()
// obj.__proto__ 这个对象的原型
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 函数都有一个prototype  对象
// 函数也是对象  Person
Person.prototype = {
    sayHai() {
        console.log('hello');
    }
}
// 面向对象式， 传统的java, c++ class 关键字
// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHai(){
//         console.log('hello');
//     }
// }