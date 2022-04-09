<template>
  <div class='top-input'>
    <TopBar>
      <template #content>
        <SearchControl/>
      </template>
      <template #right>
        <div class='iconfont icon-yunboke'></div>
      </template>
    </TopBar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TopBar from '../../../components/common/topbar/TopBar'
import SearchControl from '../searchControl/SearchControl'
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
  font-size: 22px;
  margin: 0 5px;
}
</style>
