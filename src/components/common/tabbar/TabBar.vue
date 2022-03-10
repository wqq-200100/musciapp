<template>
  <div id='tab-bar'>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components:{},
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang='less'>
#tab-bar{
  display:flex;
  background-color: #f6f6f6;
  position: fixed; /*生成绝对定位的元素，相对于浏览器窗口进行定位。*/
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0 -1px 1px rgba(100,100,100,.01) ; /* x y 模糊程度 颜色*/
}
</style>
