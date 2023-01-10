const obj = {a:1, b:2, c:3, e: {f : 4}}
// const o = obj;
// const o = {}; 
// for (let key in obj) {
//   o[key] = obj[key]
// }
// console.log(o);
// o.a = 2;
// console.log(obj, o);
const o = JSON.parse(JSON.stringify(obj)); // 序列化的过程
// console.log(typeof o);
o.e.f = 6
console.log(obj, o);
