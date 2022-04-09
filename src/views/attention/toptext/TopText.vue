<template>
  <TopBar>
    <template #content>
      <div class='text'>动态</div>
    </template>
    <template #right>
      <div class='iconfont icon-jiagou-jia'></div>
    </template>
  </TopBar>
</template>

<script>
import { defineComponent } from 'vue'
import TopBar from '../../../components/common/topbar/TopBar'

export default defineComponent({
  components:{
    TopBar
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.text{
  font-size:20px;
  font-weight: 600;
}
.iconfont{
  font-size: 25px;
  margin: 0 5px;
}
.icon-jiagou-jia{
  color: red;
}
</style>
