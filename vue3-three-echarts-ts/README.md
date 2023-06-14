# 大屏应用
- three
- echarts
- 大屏
   > 1940
   rem 做单位
- vue3 组件

- 工程化
   alias @ vite.config.js
   tsconfig.json 静态编译 

- 组件化
   大屏组件化比较简单
   Header
   Panel
   echarts
      PieChart
      LineCharts
   three
      Scene
- 闭包前面的;
   ;阻断之前的执行
   立即执行函数
   框架jquery lodash 代码放到立即执行函数里面
   最前面;
   代码混淆 合并的

- echarts 提升?
   useChart 函数
   - 封装echarts 的使用流程
      init
      setOptions
      resize
      卸载的 释放内存 onUnmounted

- vue3 hooks 封装echarts 的用法
   - 简历 了解echarts/three.js 数据可视化方案
   - 项目亮点介绍
      使用hooks 封装echarts 各种图标，不用重复echarts 的api, 并做到响应式
      - useCharts
         - 封装了 echarts 的init, dom 挂载点的获取，
         - nextTick() setOptions 方法
         - onUnmounted dispose 方法，null 手动回收图标实例 性能优化 
         - useSize
            - throttle onresize 性能优化
            - onMounted 监听事件
            - onUnmounted 移除事件
      - useChart() 返回 setOption + ref
