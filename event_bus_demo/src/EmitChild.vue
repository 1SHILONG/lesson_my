<template>
    <div>
        <button @click="doSomething">按钮</button>
    </div>
</template>
<script setup>
import emitter from './eventBus';
const doSomething = () => {
    console.log('////')
    // 触发事件
    emitter.emit('eventName');
}
</script>