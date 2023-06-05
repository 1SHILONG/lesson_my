<script setup>
// 手写 gvuex useStore 的hooks 函数
// 返回store 单例
import { useStore } from 'vuex'
import { computed } from 'vue'
// state ref double computed
// vuex 全局共享的vm层
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);

function add() {
  store.commit('add')
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<template>
 <div>{{ count }} * 2 = {{ double }}</div>
 <button @click="add">add</button>
 <button @click="asyncAdd">async add</button>
</template>

<style scoped>

</style>
