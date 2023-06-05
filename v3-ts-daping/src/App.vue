<script setup lang="ts">
import Layout from './layout/index.vue';
</script>

<template>
 <div class="main">
  <Layout>

  </Layout>
 </div>
</template>

<style scoped>
body, html {
  background-color: #000;
}
/**
chrome google 商业浏览器
v8 引擎 js test -> ast -> 词法分析 语法分析 -> JIT -> 机器码
chromium 开源浏览器
苹果 google webkit 渲染引擎 移动端没有感觉到兼容性
工程化 stylus css4 postcss
不用手动写 -webkit 自动生成
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
