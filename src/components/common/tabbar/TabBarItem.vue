<template>
    <div class='tab-bar-item' >
      <div>
        <slot name='item-icon'></slot>
        <slot name='item-text'></slot>
      </div>
    </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    let isActive = false

    return {
      isActive,
    }
  }
})
</script>

<style scoped lang='less'>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.active{
  color: red;
}
</style>
