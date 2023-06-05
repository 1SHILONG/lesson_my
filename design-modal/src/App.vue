<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const showModal = () => {
  show.value = true
}
const doCancel = () => {
  console.log('cancel');
}
const doConfirm = () => {
  console.log('confirm');
  show.value = false
}
</script>

<template>
  <div>
    <div>{{ $t('demo.test') }}</div>
    <div>{{ $t('r.cancel') }}</div>
   <!-- ElInput -->
   <button @click="showModal">显示modal</button>
   <RModal v-model="show" title="modal标题" @on-cancel="doCancel" @on-confirm="doConfirm">
    <div>这是一个Modal</div>
   </RModal>
  </div>
</template>

<style scoped>

</style>
