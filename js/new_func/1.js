var stuA = {
   name: '蔡总'
};

var stuB = {
   name: '刘总'
};


function sayHi(...args) {
   console.log(arguments, ...args);
   console.log(`你好，我是${this.name}`)
}
Object.prototype.sayHi = sayHi;

// stuA, stuB 都能 sayHi
// call 改天换命， 手动指定this 的指向
// this -》 调用对象stuA stuB
// sayHi.call(stuB);
// sayHi.call(stuA);
// stuA.sayHi();
sayHi.apply(stuB, [1, 2]);
sayHi.call(stuB, 1, 2);
// var func = sayHi.bind(stuB);
// func();