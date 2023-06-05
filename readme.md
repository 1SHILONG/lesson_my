- 组件通信
  - 8种
    - props / emit
    - eventbus vue2.0 3.0废弃了 事件总线
    - provide inject 崛起
    - ref/defineExpose 
    - vuex/pinia
    - localStorage
    - $parent $child vue2.0 vue3.0废弃
    - attrs
  - 3类
    父子
    兄弟组件
    跨层级
  - 底层原理是什么
      设计模式 订阅发布者模式

      - provide
  
- EventBus
    vue 2.0 new EventBus 基于事件消息机制（on 订阅 emit 触发）实现通信
    3.0 结合 mitt 第三方EventEmitter 库也可以
    provide + inject 代替了他们

- 
  1. 收集岗位信息 值日
  2. 面试问题
      50%
      - 手写 Promise js底层 练手
        要看
      - 面试沟通技巧
      - vue 深入 mvvm 组件设计
      - 数据可视化
      - 写文章

- 请设计Modal 组件
  - 入职后工作 写组件 用组件 研究组件
  - 组件
    - HTML6 Web Component
    - 抽象能力
      需求 严谨 通用性
      - 如何让Modal 组件全局化?
        Vue.use(Modal)
        本质是? install 方法 -》 app.component(name, )
      - 如何发布到npm ?
        一定的目录结构和要求
        plugins
          要求

    - 组件设计
      好的组件一定是先设计的
      抽象好
      title + content(slot) + footer(button 取消 确定)
      props title v-model show
      <Modal>
      content...
      </Modal>
    - 需求分析
      - 遮罩层 点击 退出modal
      - 标题内容 主题内容 确定 取消 事件等
      - typescript
      - 国际化 
    - 实现流程
    - 项目亮点请加上设计了某某通用组件

- vue2 和 vue3 响应式的区别
  defineProperty 与 proxy 区别

  - defineProperty 返回的是对象本身
    proxy 返回的...
    通过handler 有多达十几种的对象行为、属性操作拦截
- defineProperty 优点
  - 兼容性 es5+
  - 性能好 内存中没有多proxy 实例 也没有handler
  - 可读性更好 学习成本低

- defineProperty 缺点是什么?
  - 对象的行为不可以拦截 13种行为
    get set是属性的操作
    proxy has deleteProperty 
    ownKeys() set()
    setOwnPropertyDescriptor()
    setPrototypeof()
  - 不能直接监听数组的变化 length
    通过重写那7个方法来达到

- proxy 优点
  - 代理整个对象
  - 监听数组
  - Map Set 监听
  - 新增和删除 

- reflect 对象理解
  - Reflect Es6 新的内置对象 不能new
    Reflect.get set() has() . [] = 对象操作符
  - 结合proxy 替代了一些运算符， 支持拦截
  