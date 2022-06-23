<template>
  <TabBar class='tab-bar'>
    <router-link to='/find' class='link'>
      <TabBarItem>
        <template #item-icon ><div class='iconfont icon-gedan'></div></template>
        <template #item-text>发现</template>
      </TabBarItem>
    </router-link>
    <router-link to='/recommend' class='link'>
      <TabBarItem>
        <template #item-icon ><div class='iconfont icon-yunboke'></div></template>
        <template #item-text>播客</template>
      </TabBarItem>
    </router-link>
    <router-link to='/home' class='link'>
      <TabBarItem>
        <template #item-icon><div  class='iconfont icon-yinle'></div></template>
        <template #item-text>我的</template>
      </TabBarItem>
    </router-link>
    <router-link to='/attention' class='link'>
      <TabBarItem>
        <template #item-icon><div class='iconfont icon-weibiaoti--'></div></template>
        <template #item-text>关注</template>
      </TabBarItem>
    </router-link>
    <router-link to='/cloud' class='link'>
      <TabBarItem>
        <template #item-icon><div class='iconfont icon-duoyunye'></div></template>
        <template #item-text>云村</template>
      </TabBarItem>
    </router-link>
  </TabBar>
</template>

<script>
import { defineComponent } from 'vue'
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default defineComponent({
  components:{
    TabBar,
    TabBarItem
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.tab-bar{
  background-color: #ffffff;
  height: 49px;
}
.play{
  width: 100%;
  height: 20px;
  background-color: orange;
  top: 20px;
}
.link{
  flex: 1;
  color: #666;
}
&.router-link-exact-active{
   color: red;
 }
.iconfont{
  font-size: 26px;
  margin-bottom: -9px;
}
</style>
