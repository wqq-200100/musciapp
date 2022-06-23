<template>
  <div class='content'>
    <div class='my-attention'>我的关注</div>
    <div class='content-right'>
      <div class='all'>全部</div>
      <div class='Musician'>音乐人</div>
      <div class='friend'>朋友</div>
    </div>
  </div>
  <div class='publish'>
    <div class='publish-left'>
      <img src='../../../assets/image/img1.jpg' alt=''>
      <div class='name'>我发布了一张新专辑</div>
    </div>
    <div class='iconfont icon-youjiantou'></div>
  </div>

  <div class='message' v-for='item in dataComment'>
    <div class='comment'>
      <img :src=item.sharePicUrl alt=''>
      <div class='detail'>
        <div class='name'>{{ item.title }} <span>分享歌曲:</span></div>
        <!--<div class='time'>昨天半夜</div>-->
      </div>
    </div>
    <div class='description'>
      <div class='meg' v-if='item.text.length >0'>
        <div v-for='i in item.text'>
          {{ i }}
        </div>
      </div>

      <div class='music' @click='changeMusic(1919322135)'>
          <img src=../../../assets/image/img6.jpg alt=''>
          <div>
            <div class='name'>存在（电视剧《北京青年》片尾曲</div>
            <div class='singer'>汪峰</div>
        </div>
      </div>
    </div>
    <div class='review'>
      <div class='review-list'>
        <div class='iconfont icon-fenxiang'>9</div>
        <div class='iconfont icon-pinglun'>199</div>
        <div class='iconfont icon-dianzan'>1999</div>
      </div>
      <div class='iconfont icon-sangedian'></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getMusicUrl, recommendSons } from '../../../network/find'
import myvuex from '../../../store'
import { topic } from '../../../network/follows'

const dataComment = ref([])
const songList = ref([])

async function changeMusic(id){
  const res = await getMusicUrl(id)
  const url = res.data[0].url
  myvuex.commit('musicUrlSetter',url)
}

async function hotTopic(){
  const data = await topic()
  dataComment.value = data.hot
}
hotTopic()

async function Song(){
  const songData = await recommendSons()
  console.log(songData.data)
  songList.value = songData.data.list
}
Song()

</script>

<style scoped lang='less'>
.content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 9px;
  .my-attention{
    font-size: 15px;
    font-weight: bold;
  }
  .content-right{
    display: flex;
    div{
      padding: 0 0 0 35px;
    }
    .all{
      font-weight: bold;
    }
  }
}
.publish{
  width: 95%;
  height: 55px;
  background-color: rgb(159,155,152);
  display: flex;
  justify-content: space-between;
  line-height: 55px;
  padding: 0 9px;
  margin: 6px auto;
  border-radius: 14px;
  color: #ffffff;
  img{
    width: 20px;
    height: 20px;
    margin-top: 17px;
    border-radius: 50%;
  }
  .name{
    margin-left: 6px;
    font-size: 15px;
  }
  .publish-left{
    display: flex;
  }
}
.message{
  margin-top: 10px;
  .comment{
    display: flex;
    justify-content: left;
    padding: 9px;
    margin-left: 9px;
    .detail{
      margin-left: 9px;
      .name{
        font-size: 15px;
        font-weight: 600;
        span{
          font-weight: normal;
        }
      }
    }
    .time{
      font-size: 12px;
      margin-top: 5px;
    }
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .description{
    margin-left: 76px;
    margin-right: 3px;
    font-size: 16px;
    margin-top: -7px;
    .music{
      height: 50px;
      background-color: rgb(243,243,241);
      margin-right: 12px;
      margin-top: 10px;
      border-radius: 8px;
      display: flex;
      justify-content: left;
      img{
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin: 5px;
      }
      .singer{
        font-size: 12px;
        color: #888888;
      }
    }
  }
  .review{
    display: flex;
    justify-content: space-between;
    margin:10px 5px 0 78px;
    .review-list{
      display: flex;
      justify-content: space-between;
      margin-left: -31px;
      div{
        padding: 0 29px;
      }
    }
    .icon-sangedian{
      margin-right: 9px;
      color: #888888;
    }
  }
}
</style>
