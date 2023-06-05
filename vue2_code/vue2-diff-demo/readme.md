- 不用vite 如何把代码跑起来
    模块化
    vite webpack 企业级的工程化工具
    中小型工程化工具 不需要那么复杂 立马把项目跑起来

- 二次更新渲染细节
    - 如何更新 首先如何比对节点
    - 比tag
        tag 类型都不一样
    - 比data
    - 比children

- vue 源码中学到了什么？
    - 模块化，职责划分  
        一个函数/文件只做一件事
        - h.js
        - render.js
            - patchData.js
            - diff.js