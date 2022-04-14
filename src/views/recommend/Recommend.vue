<template>
  <div class='recommend'>
    <TopControl/>
    <SearchInput/>
    <IconList/>
    <div class='content'></div>
    <MusicTitle/>
    <LikeMusic/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import TopControl from './topitem/TopControl'
import SearchInput from './SearchInput/SearchInput'
import IconList from './iconList/IconList'
import MusicTitle from './musictitle/MusicTitle'
import LikeMusic from './LikeMusic/LikeMusic'
import Bottom from '../../components/content/bottom/Bottom'

export default defineComponent({
  components:{
    TopControl,
    SearchInput,
    IconList,
    MusicTitle,
    LikeMusic,
    Bottom
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.content{
  height: 200px;
  width: 100%;
  background-color: #42bBaa;
}
</style>
