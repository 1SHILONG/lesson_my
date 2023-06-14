<script setup lang="ts">
// vue + echarts + hooks 可复用的饼图
// DOM
import type { EChartsOption } from 'echarts'; // 约定option 参数
import { ref, type Ref, onMounted } from 'vue';
import { useChart } from '@/hooks/useChart';

const chartRef: Ref = ref(null);
const { setOptions } = useChart(chartRef);

onMounted(() => {
  init();
})

let option: EChartsOption;

const init = () => {
  option = {
    title: {
      text: 'Referer of a Website',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '0.3rem',
      },
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontSize: '0.2rem',
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          // fontSize: '0.2rem',
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    ],
    textStyle: {
    },
  };
  setOptions(option);
}
</script>

<template>
  <div class="chart" ref="chartRef"></div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 40vh;
}
</style>