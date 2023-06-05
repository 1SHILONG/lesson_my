import { computed, inject, reactive } from "vue";
// 基于 inject + provide 跨层级通信
const STORE_KEY = '__store__'; //key

function useStore() {
  return inject(STORE_KEY)
}

class Store{
  constructor(options) {
    this.$options = options;
    this._state = reactive({
      // vuex 数据响应的? proxy
      data: options.state()
    })
    this._mutations = options.mutations;
    this._actions = options.actions
    this.getters = {}

    Object.keys(options.getters).forEach(name => {
      const fn = options.getters(name)
      this.getters[name] = computed(() => fn(this.state))
    })
  }
  // es6 class
  get state() {
    return this._state.data
  }
  install(app) {
    app.provide(STORE_KEY, this)
  }
  // this => Store
  commit = (type, payload) => {
    const entry = this._mutations[type];
    // 
    entry && entry(this.state, payload)
  }
  dispatch(type, payload) {
    const entry = this._actions[type];
    return entry && entry(this, payload)
  }
}
// 单例
function createStore(options) {
  // ? 如何实现单例
  return new Store(options);
}

export {createStore, useStore}