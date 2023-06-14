<template>
  <div class="layout">
    <Header>数据中心可视化系统</Header>
    <div class="layout-content">
      <div class="layout-content-left">
        <Panel>
          <div>向西28° 2023/04/02 12:00 正常</div>
          <div>向西28° 2023/04/02 12:00 正常</div>
          <div>向西28° 2023/04/02 12:00 正常</div>
        </Panel>
        <Panel>
          <PieChart></PieChart>
        </Panel>
      </div>
      <div class="layout-content-right">
        <Panel>
          <LineCharts></LineCharts>
        </Panel>
      </div>
      <Scene></Scene>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Panel from '@/components/Panel/index.vue';
import PieChart from '@/components/Charts/PieChart.vue';
import LineCharts from '@/components/Charts/LineCharts.vue';
import Scene from '@/components/Scene.vue';
</script>

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
.layout-content-right {
  position: absolute;
  right: 0.6rem;
  top: 70px;
  width: 30vw;
}
.panel {
  margin-bottom: 0.3rem;
}
</style>