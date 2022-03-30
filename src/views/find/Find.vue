<template>
  <div class='find'>
    <TopInput/>
    <Banner/>
    <IconList/>
    <MusicList/>
    <BottomMusic/>
    <Bottom/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import TopInput from './topinput/TopInput'
import Banner from '../../components/common/banner/Banner'
import IconList from './iconList/IconList'
import MusicList from '../../components/content/musiclist/MusicList'
import BottomMusic from './BottomMusic/BottomMusic'
import Bottom from '../../components/content/bottom/Bottom'

export default defineComponent({
  components:{
    TopInput,
    Banner,
    IconList,
    MusicList,
    BottomMusic,
    Bottom
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
