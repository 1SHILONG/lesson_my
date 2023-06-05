
- 从何而来
  js/DOM API等 -> jQuery(高效/兼容性) -> template lodash compiler ->
  VUE template/script/css

  html -> template 业务的focus -> 数据驱动 -> reactive -> mounted + updated 
  -> effect(compiler) -> vnode -> diff 前后状态的差异 -> dom 更新

- 组件生成什么？
  - render template {{}} v-if : VDOM 产出 -> createElement
  - reactive ref setup
  - 生命周期 
  - VDOM
  - diff 

- Component 类 函数 -> render -> 真实的DOM
  组件化思想 -> reactive  diff -> finnal createElement

- 组件前身的本质 是根据数据得到html内容
  VDOM

  Component(VDOM)
    +
  render 方法 {type, props, children } createElement

- 组件的产出是 Virtual DOM
    - 分层
      平台无关性 VDOM -> patch -> html/wxml/xml SSR 服务器端渲染
    - 性能优化
      查找 比对 收集差异
      
- 函数式组件(Functional component) 和 有状态组件(Stateful component)
  - 数据业务 父组件
  class MyComponent {}
      是一个类， 可实例化
      可以有自身状态
      产出VNODE 的方式: render 方法
  - 展示为主 函数组件 StatelessComponent props
  function MyComponent(props) {}
    - 是一个纯函数 一个props状态对应唯一的template
    - 没有自身的状态
    - 产出VNode 的方式 单纯的函数调用

- 组件是怎么挂载到页面上的 VNode + Renderer
- 当更新时，组件是如何effect
- DOM VDOM
  - document.createElement('div')  <div>
  - h('div')
  - Component.$VNode -> h('div')
  - tag, props({class: "sd", id: "d1"}), children: [
    { tag: ele, {list: list}, children: [] }
    { tag: div, {}, children: ['hello world'] }
  ]
      <div class="sd">
        <ele :list="list"></ele>
        <div>hello world</div>
      </div>
    
    class TreeNode {
      constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
      }
    }
  VDOM
  h(tag, data, children) VNode
    h(tag, data, children) VNode
      null

- 我们可以通过检查 tag 属性值是否是字符串来确定一个VNode 是否是普通标签。
    - tag function -> statelessComponent h(template)
    - class -> StatefulComponent h(component.render)
    - .text -> document.createTextNode()
    - Fragment document.createDocumentFragment 性能优化组件
      <template>
        <Fragment>
          <td></td>
          <td></td>
          <td></td>
        </Fragment>
      </template>
    - Protal 指定目标地 弹出层
      <Dialog> 
        <p>
          <Portal target="body">
        <p>
      </Dialog>
      flags

      const elementVNode = {
        tag: 'div',
        flags: 0|1|2|3|4,
        data: null,
        children: {
          tag: MyComponent,
          data: null
        }
      }

- flags 设计
  - 优化手段
      不需要每次都判断
  - html 元素还是组件亦或是普通文本 常用
      - 拿到 VNode 后先尝试把它当作组件去处理，如果成功的创建了组件，那说明
      该 VNode 就是组件的 VNode
      - 如果没能成功的创建组件，则检查 VNode.tag 是否有定义，如果有定义则当作
      普通标签处理 includes html标签校验 HTMLElement
      - 如果 VNode.tag 没有定义则检查是否是注释节点
      - 如果不是注释节点，则会把它当作文本节点对待
  - 用位运算在一定程度上再次拉升了运行时性能
      flags 2 4 8 16 32 64...
- vue runtime