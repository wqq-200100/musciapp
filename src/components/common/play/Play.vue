<template>
  <div class='audio'>
    <audio ref='audioRef' :src='musicUrl || musicHistory.musicUrl'  />
  </div>

  <div class='play' @click='goto'>
    <div class='play-left '>
      <img :class='`onPlay ${isActive || "stop"}`' :src='musicInfo.picUrl || musicHistory.picUrl' alt=''>
      <span>{{ musicInfo.name || musicHistory.name }}</span>
    </div>
    <div class='play-right'>
      <div @click='changePlay'>
        <div v-if='isActive' class='iconfont icon-bofang1'></div>
        <div v-else class='iconfont icon-bofang '></div>
      </div>

      <div class='iconfont icon-liebiao1'></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import myvuex from '@/store/myvuex'
import router from '../../../router'

let musicUrl = computed(() => myvuex.state.musicUrl)
let musicInfo = computed(() => myvuex.state.musicInfo)

const musicHistory = JSON.parse(localStorage.getItem('musicInfo'))
const isActive = ref(false)
const audioRef = ref(null)

watch(musicUrl, () => {
  changePlay(musicUrl.value)
})

function changePlay() {
  isActive.value = !isActive.value
  if (!isActive.value) {
    audioRef.value.pause() // 停止播放
  } else {
    setTimeout(()=>{{
      audioRef.value.play() // 开始播放
    }}, 500)
  }
}
function goto() {
  router.push('./Player')
}

</script>

<style scoped lang='less'>
.onPlay {
  animation: xuanzhuan 3s linear infinite;
}

@keyframes xuanzhuan {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 向此元素应用动画效果 */
.stop {
  animation-play-state: paused
}

.play {
  width: 100%;
  height: 56px;
  line-height: 56px;
  position: fixed;
  bottom: 47px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  background-color: #ffffff;

  img {
    font-size: 15px;
    width: 50px;
    height: 50px;
    border: 7px solid black;
    border-radius: 50%;
    margin-top: -4px;
  }

  .play-right {
    display: flex;

    .iconfont {
      margin-left: 20px;
      font-size: 35px;
    }
  }

  .play-left {

    span {
      padding: 0 10px;
      font-size: 17px;
    }
  }
}
</style>
