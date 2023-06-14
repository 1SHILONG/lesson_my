import { type Ref, onUnmounted, nextTick } from 'vue';
import type { ECharts, EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { throttle } from 'lodash-es';
import { useResize } from './useResize';

export function useChart(
  elRef: Ref,
  theme?: string
) {
  let chartsInstanceRef: ECharts | null = null;
  function init() {
    chartsInstanceRef = echarts.init(elRef.value, theme)
  }
  const setOptions = (options: EChartsOption) => {
    init();
    // 
    nextTick(() => {
      chartsInstanceRef?.setOption(options)
    })
  }

  let resizeFn = resize;
  const throttleResize = throttle(resizeFn, 200);

  function resize() {
    if (!chartsInstanceRef) {
      return
    }
    chartsInstanceRef.resize();
  }

  useResize(throttleResize);

  onUnmounted(() => {
    if (!chartsInstanceRef) {
      return
    }
    chartsInstanceRef.dispose();
    chartsInstanceRef = null; // 主动回收
  })

  return {
    setOptions
  }
}