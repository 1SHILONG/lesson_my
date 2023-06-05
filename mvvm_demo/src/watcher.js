// 订阅发布者
// vdom js html
import { Dep } from "./observer";

function Watchcer(vm, exp, cb) {
  this.vm = vm;
  this.exp = exp;
  this.cb = cb;
  this.value = this.get();
}

Watchcer.prototype = {
  get: function () {
    Dep.target = this; // 缓存这个watcher
    var value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  },
  update() {
    this.run()
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
}

export default Watchcer;