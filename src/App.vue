<template>
  <tab-contor/>
    <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import tabContor from './components/content/tabContor/tabContor.vue'

export default defineComponent({
  components:{tabContor},
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
@import "assets/css/base.css";
</style>
