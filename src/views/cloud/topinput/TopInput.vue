<template>
  <top-bar>
    <template #content>
      <SearchControl/>
    </template>
    <template #right>
      <div class='iconfont icon-jiagou-jia'></div>
    </template>
  </top-bar>
</template>

<script>
import { defineComponent } from 'vue'
import TopBar from '../../../components/common/topbar/TopBar'
import SearchControl from '../../find/searchControl/SearchControl'

export default defineComponent({
  components:{
    TopBar,
    SearchControl
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.iconfont{
  color: red;
  font-size: 25px;
  margin: 0 5px;
}
</style>
