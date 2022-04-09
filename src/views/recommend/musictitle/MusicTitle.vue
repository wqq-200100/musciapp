<template>
  <MusicTitle>
    <template #left>
      <div class='iconfont icon-shuaxin'></div>
      <span>猜你喜欢</span>
    </template>
    <template #right>
      <span>兴趣定制</span>
      <div class='iconfont icon-youjiantou'></div>
    </template>
  </MusicTitle>
</template>

<script>
import { defineComponent } from 'vue'
import MusicTitle from '../../../components/content/musictitle/MusicTitle'

export default defineComponent({
  components:{
    MusicTitle
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.top-left span{
  font-size: 20px;
  font-weight: 750;
}
.top-left .iconfont{
  font-size: 20px;
  margin-right: 7px;
}
</style>
