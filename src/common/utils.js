import { computed } from 'vue'
import myvuex from '@/store'

export function changePlay() {
  // 获取值 播放状态和DOM
  let isActive = computed(() => myvuex.state.isActive)
  let dom = computed(() => myvuex.state.bofangqiDOM)

  if (isActive.value) {
    dom.value.pause() // 停止播放
  } else {
    setTimeout(() => {
      {
        dom.value.play() // 开始播放
      }
    }, 500)
  }
  myvuex.commit('changeActive')

}
