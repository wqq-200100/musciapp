<template>
  <div class='music'>
    <MusicTitle>
      <template #left>
        <div class='iconfont icon-shuaxin'></div>
        <span>二次元赛高</span>
      </template>
      <template #right>
        <div class='iconfont icon-sanjiaoxing'></div>
        <span>播放</span>
      </template>
    </MusicTitle>

    <div class='box'>
      <div class='box-top' v-for='item in recommendSonsList'>
        <div class='left' @click='playMusicurl(item.resourceId)'>
          <img :src='item.data.al.picUrl' alt=''>
          <div class='title'>
            <span class='name'>{{ item.data.name }}</span>
            <span class='songName'> &nbsp - {{item.data.ar[0].name}} </span></div>
          <div class='iconfont icon-sanjiaoxing'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MusicTitle from '../../../components/content/musictitle/MusicTitle'
import myvuex from '@/store'
import { getMusicDataAction } from '../../../store/actions'
import { recommendSons } from '../../../network/find'
import { ref } from 'vue'

const recommendSonsList = ref([])

async function get() {
  const res = await recommendSons()
  recommendSonsList.value = res.data.list
}
get()

//歌曲url和歌曲详情
async function playMusicurl(musicID) {
  // 保存musicID到store中 通过id获取歌词
  getMusicDataAction(musicID)
}
</script>

<style scoped lang='less'>
.music {
  width: 100%;
  height: 120px;

  .top-left span {
    font-size: 20px;
    font-weight: 750;
  }

  .top-left .iconfont {
    font-size: 20px;
    margin-right: 7px;
  }

  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }

  .box {
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: scroll;
    display: flex;
    height: 400px;
    flex-direction: column;
    padding-bottom: 102px;

    img {
      width: 55px;
      height: 55px;
      border-radius: 10px;
    }

    .right {
      border-top: 2px solid #f3f3f1;
      padding-top: 4px;
    }

    .left, .right {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 1px 0px;
      justify-items: center;
      align-items: center;

      .iconfont {
        width: 28px;
        padding: 0 5px;
        border: 1px solid #666666;
        border-radius: 10px;
        height: 27px;
        color: #666;
        margin-left: auto;
      }

      .title {
        line-height: 55px;
        font-size: 17px;
        font-weight: 500;
        margin-left: 15px;
        width: 270px;
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        span{
          overflow: hidden;
          display: inline-block;
        }
        .name{
          overflow: hidden;
          text-overflow: ellipsis; /* 超出内容显示为省略号 */
          white-space: nowrap;
          max-width: 170px;
        }
        .songName {
          font-size: 14px;
          color: #888;
        }
      }
    }
  }
}
</style>
