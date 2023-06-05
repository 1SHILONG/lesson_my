// const a = 1
// a++

import MVVM from './mvvm';

var vm = new MVVM({
  el: '#mvvm-app',
  // vue 2.0 options api
  data: {
    title: 'hello world'
  },
  methods: {
    clickBtn: function (e) {
      // this.title 代理 defineproperty
      this.title = '你好 付➗'
    }
  }
})

setTimeout(() => {
  vm.data.title = 'wo ce ni ma'
}, 1000)