<template>
  <div class='audio'>
    <audio ref='audioRef' :src='musicUrl || musicHistory.musicUrl' />
  </div>

  <div class='play'>
    <div class='play-left '>
      <img :class='`onPlay ${musicIsActive || "stop"}`'
           :src='musicInfo.picUrl || musicHistory.picUrl'
           alt=''
           @click='goto'>
      <span>{{ musicInfo.name || musicHistory.name }}</span>
    </div>
    <div class='play-right'>
      <div @click='changePlay'>
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
onMounted(() => {
  console.log(`musicUrl`, musicUrl.value)
  myvuex.commit('setBofangqiDOM', audioRef)
})

// watch(musicUrl, () => {
//   changePlay()
// })

function goto() {
  router.push('/Player')
}

</script>

<style lang='less' scoped>
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
    margin-top: 4px;
    display: inline-block;
  }

  .play-right {
    display: flex;

    .iconfont {
      margin-left: 20px;
      font-size: 35px;
    }
  }

  .play-left {
    width: 280px;
    text-overflow: ellipsis; /* 超出内容显示为省略号 */
    white-space: nowrap; /* 文本不进行换行 */
    display: flex;
    flex-direction: row;

    span {
      padding: 0 10px;
      font-size: 17px;
      display: inline-block;
      width: 260px;
      overflow: hidden;
      text-overflow: ellipsis; /* 超出内容显示为省略号 */
      white-space: nowrap; /* 文本不进行换行 */
    }
  }
}
</style>
