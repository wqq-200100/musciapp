import { computed } from 'vue'
import myvuex from '@/store'

export function changePlay() {
  // 获取值 播放状态和DOM
  let isActive = computed(() => myvuex.state.isActive)
  let dom = computed(() => myvuex.state.bofangqiDOM)

  if (isActive.value) {
    dom.value.pause() // 停止播放
    clearInterval(window.time)
  } else {
    setTimeout(() => {
      {
        dom.value.play()// 开始播放
        window.time = setInterval(() => {
          // 获取播放时长
          // myvuex.commit('setDuration', dom.value.duration)
          // 获取播放进度
          myvuex.commit('setCurrentTime', dom.value.currentTime)
        }, 500)
      }
    }, 500)
  }
  myvuex.commit('changeActive')
}
