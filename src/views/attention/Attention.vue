<template>
  <div class='attention'>
    <TopText/>
    <IconList/>
    <Content/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TopText from './toptext/TopText'
import IconList from './iconList/IconList'
import Content from './content/Content'
import Bottom from '../../components/content/bottom/Bottom'

export default defineComponent({
  components:{
    TopText,
    IconList,
    Content,
    Bottom
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
