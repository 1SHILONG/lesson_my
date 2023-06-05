let effective

function effect(fn) {
  effective = fn;
}

function reactive(data) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  const observed = new Proxy(data, {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      
      return typeof result !== 'object' ? result : reactive(result);
    },
    set(target, key, value, receiver) {
      effective()
      const oldValue = Reflect.get(target, key, receiver);
      const result = Reflect.set(target, key, value, receiver);
      
      if (oldValue !== value) {
        effective();
      }
      
      return result;
    }
    
  })

  return observed
}

module.exports = {
  reactive,
  effect
}