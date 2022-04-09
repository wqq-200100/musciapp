<template>
  <div class='box'>
    <audio :ref='audioRef' :src="mp3Path" controls/>
  </div>
</template>

<script setup>
import mp3Path from '../../assets/music/test.mp3'
import {ref,onMounted} from 'vue'

const audioRef = ref()

onMounted(() => {
  console.log(audioRef.value)
});
</script>

<style scoped lang='less'>
.box{
  margin: 100px auto;
  width: 100vw;
  height: 200px;
  background: #f33;
}
</style>
