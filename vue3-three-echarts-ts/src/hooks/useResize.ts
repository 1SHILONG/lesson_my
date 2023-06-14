import { onMounted, onUnmounted } from "vue";

export function useResize<T = any>(
  handlerFn: () => T,
  immediate: boolean = true // 立即执行一次
) { 
  const handler = () => {
    handlerFn();
  }
  onMounted(() => {
    window.addEventListener('resize', handler);
    immediate && handler();
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handler);
  })
}