<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import Viewer from '@/modules/Viewer';
// import ModelLoader from '@/modules/ModelLoader';
let viewer: Viewer; // 视图 scene camera renderer
// let modelLoader: ModelLoader;
onMounted(() => {
  init(); // three.js 运行
  initModel(); // 导入建模
})

const init = () => {
  viewer = new Viewer('three');
  // modelLoader = new modelLoader(viewer);
}
const initModel = () => {
  // 导入模型
  modelLoader.loadModelToScene('/models/plane.glb', baseModel => {

  })
}
</script>

<template>
  <div id="three">
    
  </div>
</template>

<style>
#three {
  height: 100%;
  width: 100%;
}
</style>