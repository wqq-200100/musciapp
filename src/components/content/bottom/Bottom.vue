<template>
  <TabControl/>
  <Play/>
</template>

<script>
import { defineComponent } from 'vue'
import TabControl from '../tabControl/TabControl'
import Play from '../../common/play/Play'

export default defineComponent({
  components:{
    TabControl,
    Play
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
