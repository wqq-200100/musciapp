<template>
  <div class='audio'>
    <audio ref='audioRef' :src='musicUrl || musicHistory.musicUrl'  />
  </div>

  <div class='play'>
    <div class='play-left '>
      <img :class='`onPlay ${musicIsActive || "stop"}`'
           :src='musicInfo.picUrl || musicHistory.picUrl'
           @click='goto'
           alt=''>
      <span>{{ musicInfo.name || musicHistory.name }}</span>
    </div>
    <div class='play-right'>
      <div @click='handleUrlChange'>
        <div v-if='musicIsActive' class='iconfont icon-bofang1'></div>
        <div v-else class='iconfont icon-bofang '></div>
      </div>
      <div class='iconfont icon-liebiao1'></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import myvuex from '@/store'
import router from '../../../router'
import { changePlay } from '../../../common/utils'

// 获取state参数
let musicUrl = computed(() => myvuex.state.musicUrl)
let musicInfo = computed(() => myvuex.state.musicInfo)
let musicIsActive = computed(() => myvuex.state.isActive)
const musicHistory = JSON.parse(localStorage.getItem('musicInfo'))
const audioRef = ref(null)

// 页面加载完成后保存播放器的DOM元素
onMounted(()=>{
  myvuex.commit('setBofangqiDOM', audioRef)
})
watch(musicUrl, () => {
  handleUrlChange()
})

function handleUrlChange() {
  changePlay()
}

function goto() {
  router.push('/Player')
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
