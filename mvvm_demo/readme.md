- 何为mvvm?
  - 一种软件架构设计模式，简化用户界面的事件驱动编程
  方式
    - 用户界面工程师
  - 前端也有了自己的Model层 api/store
      前后端分离 路由和数据
  - 核心是ViewModel层 中转站
      响应式 组件化
      数据便于管理和使用 data() computed watch
      store
      向上与视图层数据单(双)数据绑定 VDOM 不做DOM编程
      向下 通过接口与model 层数据交互

    view 用户界面 视图层
    model 数据模型层 后端进行的各种业务逻辑处理和数据， 前端 api vuex
    ViewModel 解耦了view层和Model 

- webpack 调试错误
    提前打包了，babel -> preset-env 代码面目全非
    出错了，不能给我们定位到源码位置

    bundle 和 源码的映射 source-map

- vue 2.0 响应式