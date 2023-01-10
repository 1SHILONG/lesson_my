function clone(target) {
  let cloneTarget = {};
  for (const key in target) {
    // target[key]
      cloneTarget[key] = target[key];
  }
  return cloneTarget;
};
let obj = {a:1, b:2, c:3, d: {e: 5}};
const o = clone(obj);
o.b = 3;
obj.d.e = 6;
console.log(obj, o);