<template>
  <div class='box'>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.box{
  margin-top:17px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
