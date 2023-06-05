// 观察者模型 
function Observer(data) {
  this.data = data;
  this.walk(data);
}
Observer.prototype = {
  walk: function (data) {
    var self = this;
    Object.keys(data).forEach(function (key) {
      self.defineReactive(data, key, data[key]);
    })
  },
  defineReactive: function (data, key, val) {
    var dep = new Dep(); // 解耦 ? 使用订阅发布者模式 pub sub
    var childObj = observe(val); // 递归？
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function getter() {
        // 收集订阅者
        if (Dep.target) {
          dep.addSub(Dep.target); // 
        }
        return val;
      },
      set: function setter(newVal) {
        // 发布者 告知订阅者执行
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notifiy();
      }
    })
  }
}

export const observe = (value) => {
  if (!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
}

export const Dep = function () {
  this.subs = []; // 订阅者数组
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notifiy: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}

Dep.target = null; // 指向 get 的对象 template 计算属性 生命周期 watch...