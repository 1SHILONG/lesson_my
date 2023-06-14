import { createApp } from 'vue'
import './assets/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app  
  .mount('#app')
  // 适配 动态设置rem
  // 相应宽度的变化
  // rem vw 实现等比例
  // devicePixelRatio
  ; (function (doc, win) {
  const fn = () => {
    const docEl = doc.documentElement, // html标签
    clientWidth = docEl.clientWidth; // 窗口宽度
    if (!clientWidth) return;
    // 设计稿 
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  }
  if (!doc.addEventListener) return;
  win.addEventListener('resize', fn); // 旋转屏幕 防抖
  // vue computed
  doc.addEventListener('DOMContentLoaded', fn);
})(document, window)


