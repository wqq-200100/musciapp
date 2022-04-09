<template>
  <div class='top-title'>
    <div class='top-left'>
      <slot name='left'></slot>
    </div>
    <div class='top-right'>
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
.top-title{
  display: flex;
  justify-content: space-between;
  border-top: 10px solid #f3f3f1;

  .top-left,.top-right{
    display: flex;
    margin: 10px;
  }
  .top-right{
    border: 1px solid #999;
    border-radius: 14px;
    padding: 2px 6px ;
  }

}
</style>
