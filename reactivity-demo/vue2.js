let effective

function effect(fn) {
  effective = fn
}

const oldArrayPrototype = Array.prototype
const proto = Object.create(oldArrayPrototype);

['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  proto[method] = function () {
    effective()
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function reactive(data) {
  if (typeof data !== 'object' || data === null) {
    return data
  }
  if (Array.isArray(data)) {
    data.__proto__ = proto
  }
  
  Object.keys(data).forEach(function (key) {
    let value = data[key]; // 值？
    reactive(value); // 递归
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: true,
      get: () => {
        return value
      },
      set: newVal => {
        if (newVal !== value) {
          //
          effective()
          value = newVal
        }
      }
    })

  })
  return data
}

module.exports = {
  reactive,
  effect
}