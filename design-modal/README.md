- 看透style opacity 用法
   - 提供定制能力
      - 默认配置
         modal/config.ts
      - 本应用全局定制
         main.ts
         app.use(Modal, {

         })
         Object.assign(config.style, options.style)
      - 组件定制

      props: {
         default: config.style!.opacity
      }
- stylus 预编译
   & 混合 1px问题

- i18n 国际化配置
   - 项目亮点
      全局use vue-i18n
      createI18n({
         locale: storage
         message:
      })
      业务国际化语言包, 添加组件语言包 完成配置
   - 难点
      国际化 组件的支持，搞了好久