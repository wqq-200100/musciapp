<template>
  <div class='Player'>
    <div class='bg'></div>
    <div class='playTop'>
      <div class='iconfont icon-zuojiantou' @click='goHome'></div>
      <div class='aaa'>
        <div class='songName'>{{ name || musicHistory.name }}</div>
      </div>
      <div class='iconfont icon-fenxiang1'></div>
    </div>
    <div v-show='!isLyric' class='playContent'>
      <img :class="musicPlay ? 'active' :'needle'" alt='' class='active' src='../../assets/image/needle-ab.png'>
      <img alt='' class='disc-plus' src='../../assets/image/disc-plus.png'>
      <img :src='picUrl || musicHistory.picUrl' alt='' class='playImg'>
    </div>

    <div class='playLyric'>
      <div :style='`top: ${playLyricBoxTop}px`' class='playLyricBox'>
        <div v-for='(item, index) in geCi' style='height: 30px;'>
          <div :class='index === curLine && "currentLine"'>
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>

    <div class='playFooter'>
      <div class='iconfont icon-caozuo-xunhuan1' />
      <div class='iconfont icon-shangyishoushangyige' />
      <div @click='handleClick'>
        <div v-if='musicPlay' class='playicon iconfont icon-bofang1' />
        <div v-else class='playicon iconfont icon-bofang' />
      </div>
      <div class='iconfont icon-xiayigexiayishou' />
      <div class='iconfont icon-liebiao1' />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import TopBar from '../../components/common/topbar/TopBar'
import myvuex from '@/store'
import router from '../../router'
import { changePlay } from '../../common/utils'
import { getMusicLyric } from '../../network/find'
import Lyric from 'lrc-file-parser'
import { useRouter } from 'vue-router'
import { getMusicDataAction } from '../../store/actions'


let audioRef = computed(() => myvuex.state.bofangqiDOM)
let musicIsActive = computed(() => myvuex.state.isActive)
let musicPlay = computed(() => myvuex.state.isActive)
let musicInfo = computed(() => myvuex.state.musicInfo)
let currentTime = computed(() => myvuex.state.currentTime)
let isLyric = ref(true)
const { name, picUrl, id } = musicInfo.value

let curLine = ref(0)
let playLyricBoxTop = ref(0)
const geCi = ref()
const lyricRef = ref()
const playLyricBoxRef = ref()

const musicHistory = JSON.parse(localStorage.getItem('musicInfo'))

onMounted(() => {
  const route = useRouter()
  const query = route.currentRoute.value.query
  // getMusicDataAction(query.id)
  getMusicDataAction(33894312)//使用固定id调试
  initData()
})

function scrollLyricBox(line) {
  // 滚动歌词高度
  const itemHeight = 30 // 单行歌词高度
  const boxHeight = 600 // 容器高度
  const boxMidPosition = Math.floor(boxHeight / 2) // 容器中间位置
  const midLine = Math.floor(boxMidPosition / itemHeight) // 中间是第几行
  if (line * itemHeight >= boxMidPosition) {
    playLyricBoxTop.value = (line - midLine) * -itemHeight
  }
}

async function initData() {
  const result = await getMusicLyric(id || musicHistory.id)
  // const result = await getMusicLyric(298317)// 调试
  if (!result.lrc) {
    console.log('没有歌词哟')
  } else {
    saveLyric(result.lrc.lyric)
  }
}

function saveLyric(inputLrc) {
  // 传入lrc文件 开始播放歌词
  lyricRef.value = new Lyric({
    onPlay: function(line) { // 歌词播放时的回调、
      curLine.value = line
      scrollLyricBox(line)
    },
    onSetLyric: lines => { // 监听歌词设置事件。当设置歌词时，歌词解析完毕会触发此回调。
      console.log(lines)
      geCi.value = lines
    },
    offset: 150 // 歌词偏移时间单位毫秒, 默认 150 ms
  })
  lyricRef.value.setLyric(inputLrc) // 设置歌词，此处传入lrc文件的文本内容
  // 注意：设置歌词将自动暂停歌词播放
  // lrc.play(30000) // 播放歌词，传入开始播放时间，30000是播放时间，单位：ms
  // lrc.pause() // 暂停播放歌词
}

function handleClick() {
  if (musicIsActive.value) {
    lyricRef.value.pause()
  } else {
    lyricRef.value.play(currentTime.value * 1000)
  }
  console.log(changePlay)
  changePlay()

}

function goHome() {
  router.go(-1)
}


</script>

<style lang='less' scoped>
.Player {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("../../assets/image/img6.jpg");
    background-position: center;
    filter: blur(15px);
  }

  .playTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 49px;
    position: absolute;

    .iconfont {
      font-size: 22px;
      padding: 0 13px;
    }

    .aaa {
      width: 279.2px;
      overflow: hidden;
    }

    .songName {
      white-space: normal;
      animation: move 5s linear infinite;
      width: 279px;
    }

    .songName::after {
      position: absolute;
      right: -100%;
      content: attr(text);
    }

    @keyframes move {
      0% {
        margin-left: 412px;
      }
      100% {
        margin-left: -112px;
      }
    }
  }

  .playContent {
    position: absolute;
    width: 750px;
    height: 750px;
    top: 48px;

    .needle {
      width: 105px;
      height: auto;
      position: absolute;
      left: 23%;
      transform-origin: 30px 0;
      transform: rotate(-20deg);
      transition: all 1s;
      z-index: 10;
    }

    .active {
      width: 105px;
      height: auto;
      position: absolute;
      left: 23%;
      transform-origin: 30px 0;
      transition: all 1s;
      z-index: 10;
    }

    .disc-plus {
      width: 276px;
      height: auto;
      border-radius: 50%;
      position: absolute;
      top: 15%;
      left: 8%;
    }

    .playImg {
      width: 172px;
      height: 172px;
      border-radius: 50%;
      position: absolute;
      top: 22%;
      left: 15%;
    }
  }

  .playFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 15px;

    .iconfont {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: -16px;
    }

    .playicon {
      font-size: 47px;
    }
  }

  .playLyric {
    position: absolute;
    height: 600px;
    font-size: 18px;
    color: #333;
    font-weight: 500;
    width: 100%;
    top: 48px;
    overflow: scroll;
    text-align: center;

    .playLyricBox {
      position: relative;
      top: 0;
      transition:.5s;

      .currentLine {
        color: #ff3333;
        font-weight: 600;
      }
    }

  }
}
</style>
