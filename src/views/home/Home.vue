<template>
  <TopControl />
  <Info />
  <IconList />
  <SongList />
  <Bottom />
</template>

<script>
import TopControl from './topbar/TopControl'
import IconList from './iconList/IconList'
import SongList from './songList/SongList'
import Info from './info/Info'
import Bottom from '../../components/content/bottom/Bottom'


export default {
  components: {
    TopControl, IconList, SongList, Bottom,Info
  }
}
</script>

<style scoped lang='less'>

</style>
