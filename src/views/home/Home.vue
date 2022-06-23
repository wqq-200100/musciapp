<template>
  <TopControl />
  <Info />
  <IconList />
  <Bottom />
</template>

<script setup>
import TopControl from './topbar/TopControl'
import IconList from './iconList/IconList'
import SongList from './songList/SongList'
import Info from './info/Info'
import Bottom from '../../components/content/bottom/Bottom'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(()=>{
  const router = useRouter()
  console.log('进入home页面')
  router.push('/home/SongList')
})

</script>

<style scoped lang='less'>

</style>
