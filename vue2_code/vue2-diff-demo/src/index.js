// console.log('hello parcel');
import { h } from './h'; // VNODE 的生成
import render from './render'; // 渲染

const handler = () => alert('clicked');
const  prevVNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
  },
  onclick: handler
})

const nextVNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        border: '1px solid green'
    }
})

// const prevVNode = h('div', null, '旧的VNode')
render(prevVNode, document.getElementById('app'))
// class MyComponent {
//   render() {
//     return h('div', null, '新的VNode')
//   }
// }
// const nextVNode = h(MyComponent)

setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
