<script setup lang="ts">
import Header from './Header.vue';

</script>

<template>
  <div class="layout">
    <Header>数据可视化大屏</Header>
    <div class="layout-content">
      <!-- <Scene /> -->
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
}
.layout-content {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.layout-content-left {
  position: absolute;
  left: 0.3rem;
  top: 70px;
  width: 30vw;
}
</style>