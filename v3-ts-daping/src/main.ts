import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'

// 大屏适配
//
(function (doc, win) {
  const fn = () => {
    const docEl = doc.documentElement, // html标签
    clientWidth = docEl.clientWidth; // 窗口宽度
    
    if (!clientWidth) return;
    // 设计稿 
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  }
  win.addEventListener('resize', fn); // 旋转屏幕 防抖
  // vue computed
  // win.addEventListener('DOMContentLoaded', fn);
})(document, window)

const app = createApp(App)
app  
  .mount('#app')