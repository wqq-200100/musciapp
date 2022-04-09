<template>
  <div class='like'>
    <div class='like-left'>
      <slot name='img'></slot>
      <slot name='title'></slot>
    </div>
    <div class='like-right'>
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
.like{
  width: 95%;
  height: 88px;
  background-color: #f3f3f1;
  margin: 16px auto 0;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  padding: 17px 14px;
  .like-left{
    display: flex;
    justify-content: left;
  }
  .like-right{
    height: 27px;
    width: 88px;
    margin-top: 9px;
    text-align: center;
    span{
      font-size: 14px;
    }
  }
}
</style>
