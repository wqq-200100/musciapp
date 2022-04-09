<template>
  <div class='icon-list'>
    <div class='list-top'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>最近播放</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>本地/下载</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>云盘</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>已购</div>
      </div>
    </div>
    <div class='list-bottom'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>我的好友</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>收藏和赞</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>我的博客</div>
      </div>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <div class='icon-title'>音乐罐子</div>
      </div>
    </div>
    <div class='bottom'>
      <div>
        <img src='../../../assets/image/img3.jpg' alt=''>
        <span>心动指数100%♥~~~~·</span>
      </div>
      <div class='iconfont icon-cuowu'></div>
    </div>
  </div>
  <SongList>
    <template #img>
      <img src='../../../assets/image/img4.jpg' alt=''>
    </template>
    <template #title>
      <div>
        <div class='title'>我喜欢的音乐</div>
        <div class='iconfont icon-right'>  360 首， 已下载2首</div>
      </div>
    </template>
    <template #right>
      <div class='iconfont icon-duoyunye'><span>心动模式</span></div>
    </template>
  </SongList>
  <div class='bar'>
    <div class='left'>创建歌单</div>
    <div class='center'>收藏歌单</div>
    <div class='right'>歌单助手</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SongList from '../../../components/common/songlist/SongList'

export default defineComponent({
  components:{
    SongList
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.icon-list{
  width: 95%;
  height: 232px;
  background-color:  #f3f3f1;
  margin: 16px auto 0;
  border-radius: 10px;
  .list-top,.list-bottom{
    display:flex;
    justify-content:center;
    padding: 5px 0;
  }
  .list-item{
    margin: 0 20px;
    text-align: center;
    .icon-title{
      color: #777;
    }
    .icon{
      width: 40px;
      height: 40px;
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #999;
    padding: 7px 14px;
    span{
      padding: 0 11px;
    }
    .iconfont{
      font-size: 25px;
      color: #888888;
    }
  }
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid red;
  }
}
.bar{
  display: flex;
  justify-content: space-between;
  padding: 14px;
  font-size: 17px;
  margin: 0 30px;
  .left{
    font-weight: 900;
    border-bottom: 4px solid red;
  }
}
img{
  width: 55px;
  height: 55px;
  border-radius: 5px;
}
div{
  margin-left: 9px;
  .title{
    font-size: 16px;
    font-weight: 500;
  }
  .iconfont{
    font-size: 14px;
    margin-top: 3px;
  }
}
.icon-duoyunye{
  border: 1px solid #666666;
  border-radius: 17px;
}
</style>
