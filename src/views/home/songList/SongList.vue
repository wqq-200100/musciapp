<template>
  <div class='song-list'>
    <div class='song-title'>
      <div class='title-left'>创建歌单（6）个</div>
      <div class='title-right'>
        <div class='iconfont icon-jiahao'></div>
        <div class='iconfont icon-sangedian'></div>
      </div>
    </div>
    <div class='song'>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/img2.jpg' alt=''>
          <div>
            <div class='title'>美女都听得歌儿</div>
            <div class='iconfont icon-right'>  360 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/img6.jpg' alt=''>
          <div>
            <div class='title'>吉他</div>
            <div class='iconfont '>  8 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/img5.jpg' alt=''>
          <div>
            <div class='title'>爆炒鱿鱼</div>
            <div class='iconfont '>  99 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/img3.jpg' alt=''>
          <div>
            <div class='title'>巴拉拉小魔仙</div>
            <div class='iconfont '>  897 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/image.jpg' alt=''>
          <div>
            <div class='title'>哎呀哟哟哟</div>
            <div class='iconfont icon-right'>  123 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
      <div class='song-list-item'>
        <div class='left'>
          <img src='../../../assets/image/img1.jpg' alt=''>
          <div>
            <div class='title'>蹦迪专业</div>
            <div class='iconfont icon-right'>  666 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.song-list{
  width: 95%;
  height: 562px;
  background-color:  #f3f3f1;
  margin: 0 auto;
  border-radius: 10px;
  .song-title{
    display: flex;
    justify-content: space-between;
    padding: 16px 12px 0;
    color: #777777;
    .title-right{
      display: flex;
      .iconfont{
        margin-left: 20px;
        font-size: 20px;
      }
      .icon-jiahao{
        font-size: 28px;
        margin-top: -6px;
      }
    }
  }
  .song-list-item{
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      img{
        width: 55px;
        height: 55px;
        border-radius: 5px;
      }
      div{
        margin-left: 7px;
        .title{
          font-size: 17px;
          font-weight: 500;
        }
        .iconfont{
          color: #666666;
        }
      }
    }
    .icon-sangedian{
      font-size: 21px;
      color: #666666;
    }
  }
}
</style>
