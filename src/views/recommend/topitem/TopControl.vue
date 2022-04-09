<template>
  <topBar>
    <template #content>
      <router-link to='/home'>
        <span>我的</span>
      </router-link>
      <router-link to='find'>
        <span class='active'>推荐</span>
      </router-link>
      <router-link to='attention'>
        <span>故事</span>
      </router-link>
    </template>
    <template #right>
      <div class='iconfont icon-jiagou-jia'></div>
    </template>
  </topBar>
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

span{
  margin: 23px;
  font-size: 16px;
  color: #666666;
}
.active{
  color: black;
  font-weight: 900;
  border-bottom: 4px solid red;
}
.iconfont{
  font-size: 25px;
  margin: 0 5px;
}
.icon-jiagou-jia{
  color: red;
}
</style>
