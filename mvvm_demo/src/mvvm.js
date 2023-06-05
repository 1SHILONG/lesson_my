import { observe } from './observer';
import Compile from './compile'
// 设计模式
// Vue
// 组件
function MVVM(options) {
  var self = this; // this 丢失问题
  this.data = options.data;
  this.methods = options.methods;
  Object.keys(this.data).forEach(function (key) {
    self.proxyKeys(key);
  })
  // defineProperty set -> 响应式effect修改 解耦
  // 观察者模式 来解耦
  observe(this.data);
  new Compile(options.el, this);

}

MVVM.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return self.data[key]
      },
      set: function setter(newVal) {
        self.data[key] = newVal
      }
    })
  }
}

export default MVVM