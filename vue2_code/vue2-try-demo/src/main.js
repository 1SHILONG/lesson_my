// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
// import { template } from 'lodash'

// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html
// setTimeout(() => {
//   const html2 = compiler({ title: '字节大神' })
//   document.getElementById('app').innerHTML = html2
// }, 2000)

// props 数据参数
// const MyComponent = props => {
//  // renderer
//   const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
//   return compiler(props)
// }
// MyComponent.cache = null

// document.getElementById('app').innerHTML = MyComponent({
//   title: 'MyComponent'
// })
// import { h } from 'snabbdom'

// // h函数用来创建 VNode,组件的产出是 VNode
// const MyComponent = props => {
//   return h('h1', props.title, [
//     h('div', 'hello world'),
//     h('p', 'shb')
//   ])
// }
// console.log(MyComponent({title: 'MyComponent'}));
// import { h, init } from 'snabbdom'
// // init 方法用来创建 patch 函数
// const patch = init([])
// // 返回值是 VDOM
// const MyComponent = props => {
//   return h('h1', props.title)
// }

// // 组件的产出是 VNode
// const prevVNode = MyComponent({ title: 'prev' })
// // 将 VNode 渲染成真实DOM
// patch(document.getElementById('app'), prevVNode)

// const componentVnode = {
//   tag: MyComponent
// }

// const elementVnode = {
//   tag: 'div'
// }

// function render(vnode, container) { 
//   if (typeof vnode.tag === 'string') {
//     // html 标签
//     mountElement(vnode, container)
//   } else {
//     //组件
//     mountConpent(vnode, container)
//   }
// }

// function mountConpent(vnode, container) {
//   const instance = new vnode.tag() // Component 类
//   // 渲染
//   instance.$vnode = instance.render()
//   // 挂载
//   mountElement(instance.$vnode, container)
// }

// function mountElement(vnode, container) {
//   // 创建元素
//   const el = document.createElement(vnode.tag)
//   // 将元素添加到容器
//   container.appendChild(el)
// }

// render(elementVnode, document.getElementById('app'))

// MyComponent 组件
class MyComponent {
  render() {
    // render 函数产出 VNode
    return {
      tag: 'div'
    }
  }
}

// VNode
const componentVnode = {
  tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
  if (typeof vnode.tag === 'string') {
    // html 标签
    mountElement(vnode, container)
  } else {
    mountComponent(vnode, container)
  }
}

function mountComponent(vnode, container) {
  // 创建组件实例
  const instance = new vnode.tag()
  // 渲染
  instance.$vnode = instance.render()
  // 挂载
  mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
  // 创建元素
  const el = document.createElement(vnode.tag)
  // 将元素添加到容器
  container.appendChild(el)
  
}