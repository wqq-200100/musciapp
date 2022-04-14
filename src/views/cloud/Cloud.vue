<template>
  <TopInput/>
  <Live/>
</template>

<script>
import { defineComponent } from 'vue'
import TopInput from './topinput/TopInput'
import Live from './live/Live'
import Bottom from '../../components/content/bottom/Bottom'

export default defineComponent({
  components:{
    TopInput,
    Live,
    Bottom
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
