<template>
  <div class='Player'>
    <div class='bg'></div>
    <div class='playTop'>
      <div class='iconfont icon-zuojiantou' @click='goHome'></div>
      <div class='aaa'>
        <div class='songName'>红红火火恍恍惚惚</div>
      </div>
      <div class='iconfont icon-fenxiang1'></div>
    </div>
    <div class='playContent'>
      <img :class="musicPlay ? 'active' :'needle'" alt='' class='active' src='../../../../assets/image/needle-ab.png'>
      <img alt='' class='disc-plus' src='../../../../assets/image/disc-plus.png'>
      <img alt='' class='playImg' src='../../../../assets/image/img4.jpg'>
    </div>
    <div class='playLyric' />
    <div class='progress' />
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
import { computed, defineComponent, ref } from 'vue'
import TopBar from '../../topbar/TopBar'
import myvuex from '@/store'
import router from '../../../../router'
import { changePlay } from '../../../../common/utils'

let audioRef = computed(() => myvuex.state.bofangqiDOM)
let musicIsActive = computed(() => myvuex.state.isActive)
let musicPlay = computed(() => myvuex.state.isActive)

function handleClick() {
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
    background-image: url("../../../../assets/image/img6.jpg");
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
      width: 112px;
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
}
</style>
