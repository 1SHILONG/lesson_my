<script lang="ts">
import {
  defineComponent, computed, getCurrentInstance, onBeforeMount
} from 'vue';
import config from './config';
import { t } from './locale';
import { IInstance } from './type';


// name
export default defineComponent({
  name: 'RModal',
  props: {
  isTeleport: {
    type: Boolean,
    default: true
  },
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: '',
    required: true
  },
  opacity: {
    type: Number,
    default: () => config.style!.opacity
  },
  maskClose: {
    type: Boolean,
    default: () => config.props!.maskClose
  },
  loading: {
    type: Boolean,
    default: false
  },
  close: {
    type: Boolean,
    default: true
  }
},
emits: ['on-confirm', 'on-cancel', 'update:modelValue'],
  setup(props, ctx) {

  let instance = getCurrentInstance() as IInstance
    const style = computed(() => {opacity: props.opacity});
    onBeforeMount(() => {
      // this.$t
      console.log(111);
      
      instance._hub = {
        t: instance.appContext.config.globalProperties.$t,
        'on-cancel': () => {},
        'on-confirm': () => {}
      }
    })
    // setTimeout(() => {
    //   instance._hub = {
    //  t: instance.appContext.config.globalProperties.$t,
    // 'on-cancel': () => {},
    //  'on-confirm': () => {}
    // }
    // },1000)
    const handleCancel = () => {
      ctx.emit('on-cancel')
      ctx.emit('update:modelValue', false)
    }
    const handleConfirm = () => {
      ctx.emit('on-confirm');
      instance._hub['on-confirm']();
    }
    console.log(3333)
    return {
      style,
      t,
      handleCancel,
      handleConfirm
    }
  }
})
</script>

<template>
  <Teleport
  to="body"
  :disabled="!isTeleport"
  >
    <div v-if="modelValue" class="modal">
      <div class="mask" :style="style" @click="maskClose&&!loading&&handleCancel()">

      </div>
      <div class="modal__main">
        <div class="modal__title">
          <div class="modal__title line line--b">
            <span>{{ title || t('r.title') }}</span>
            <span v-if="close" :title="t('r.close')" class="close" @click="!loading&&handleCancel()">
              x
            </span>
          </div>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
        <div class="modal__btns line line--t">
          <button :disabled="loading" @click="handleConfirm()">
            <span class="loading">❍</span>
            {{ t('r.confirm') }}
          </button>
          <button @click="!loading&&handleCancel()">
            {{ t('r.cancel') }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="stylus" scoped>
.modal
  .mask
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color #fff
    opacity 0.7
  .line
    position relative 
    &::after
      content ""
      position absolute
      height 1px
      left 0
      right 0
      background-color rgba(0, 0, 0, 0.05)
    &--b::after
      bottom 0
    &--t::after
      top 0
  &__title
    text-align left
    font-size 14px
    padding 5px 10px
    box-sizing border-box
    display flex
    justify-content space-between
    width 100%
  &__main
    background-color #000
    text-align center
    position absolute
    top 50%
    left 50%
    transform translate(-50%, 50%)
    border-radius 4px
    overflow hidden
    min-width 200px
  &__content
    padding 15px
  &__btns
    width 100%
    box-sizing border-box
    padding 5px
    text-align right
    button  
      cursor pointer
      outline none
      border none
      text-align center
      border 1px solid gray
      border-radius 4px
      & + button
        margin-left 6px
 </style>