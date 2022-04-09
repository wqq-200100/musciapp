<template>
  <div class='top-bar'>
    <div class='left'>
      <slot name='left'>
        <div class='iconfont icon-liebiao1'></div>
      </slot>
    </div>
    <div class='content'>
      <slot name='content'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
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
.top-bar{
  display:flex;
  left:0;
  right: 0;
  top: 0;
  position: fixed;
  background: #ffffff;
  z-index: 999;
  height: 49px;

  .content{
    flex: 1;
    text-align: center;
    margin: auto;
  }
}
.iconfont{
  font-size: 25px;
  margin: 0 5px;
}
</style>
