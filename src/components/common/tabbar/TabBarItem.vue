<template>
    <div class='tab-bar-item' >
        <slot name='item-icon'></slot>
        <slot name='item-text'></slot>
    </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

    return {
    }
  }
})
</script>

<style scoped lang='less'>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;

}
</style>
