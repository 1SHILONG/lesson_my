<script setup>
import EmitChild from './EmitChild.vue';
import { onMounted } from 'vue';
import emitter from './eventBus';
const onEventHandle = () => {
  console.log('event triggered');
}
onMounted(() => {
// 订阅
  emitter.on('eventName', onEventHandle);
})
</script>

<template>
<EmitChild></EmitChild>
</template>

<style scoped>

</style>
