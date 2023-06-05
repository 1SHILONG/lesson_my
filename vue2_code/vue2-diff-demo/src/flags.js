const VNodeFlags = {
  // html 标签
  ELEMENT_HTML: 1,
  // SVG 标签
  ELEMENT_SVG: 1 << 1,
  // 普通有状态组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,
  // 需要被KEEPALIVE的有状态组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,
  TEXT: 1 << 6,
  FRAGMENT: 1 << 7,
  PORTAL: 1 << 8  
}

// html 和 svg 都是标签元素，可以用 ELEMENT 表示
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG
// 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlive的有状态组件 都是有状态
VNodeFlags.COMPONENT_STATEFUL = 
  VNodeFlags.COMPONENT_STATEFUL_NORMAL |
  VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE |
  VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE
// 有状态组件 和 函数式组件都是“组件”，用 COMPONENT 表示
VNodeFlags.COMPONENT = 
  VNodeFlags.COMPONENT_STATEFUL | VNodeFlags.COMPONENT_FUNCTIONAL

const ChildrenFlags = {
  // 未知的children类型
  UNKNOW_CHILDREN: 0,
  // 没有children
  NO_CHILDREN: 1,
  SINGLE_VNODE: 1 << 1,
  // children是多个key 的VNode v-for li
  KEYED_VNODES: 1 << 2,
  // 多个没有key的VNode p div
  NODE_KEYED_VNODE: 1 << 3
}
ChildrenFlags.MULTIPLE_VNODES = 
  ChildrenFlags.KEYED_VNODES | ChildrenFlags.NODE_KEYED_VNODE

export {
  ChildrenFlags,
  VNodeFlags
}