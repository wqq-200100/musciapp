<template>
  <TopControl/>
  <info/>
  <IconList/>
  <SongList/>
  <Bottom/>
</template>

<script>
import { defineComponent } from 'vue'
import TopControl from './topbar/TopControl'
import Info from './info/Info'
import IconList from './iconList/IconList'
import SongList from './songList/SongList'
import Bottom from '../../components/content/bottom/Bottom'

export default defineComponent({
  components:{
    TopControl,
    Info,
    IconList,
    SongList,
    Bottom
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
