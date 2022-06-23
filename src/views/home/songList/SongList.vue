<template>
  <div class='song-list' ref='songListRef'>
    <div class='song-title'>
      <div class='title-left'>创建歌单（{{SongListData.length}}）个</div>
      <div class='title-right'>
        <div class='iconfont icon-jiahao'></div>
        <div class='iconfont icon-sangedian'></div>
      </div>
    </div>
    <div class='song' ref='ScrollRef'>
      <div class='song-list-item'
           v-for='item in SongListData'
           @scroll='scrollHandle'
           @click='playlist(item.id)'>

        <div class='left'>
          <img :src=item.coverImgUrl alt=''>
          <div>
            <div class='title'>{{ item.name }}</div>
            <div class='iconfont icon-right'> {{ item.trackCount }} 首</div>
          </div>
        </div>
        <div class='right'>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount,ref } from 'vue'
import { playList } from '../../../network/userAPI'
import router from '../../../router'

const SongListData = ref([])
const ScrollRef =ref()
const songListRef = ref()
function scrollHandle() {
  //距离=总高-滚动距离-可视区高
  const scrollHeight = songListRef.value.scrollHeight
  const scrollTop = songListRef.value.scrollTop
  const clienHeight = ScrollRef.value.clientHeight //可视区高度
  //
  // const distance = scrollHeight - scrollTop - clienHeight
  if(clienHeight - scrollTop < 600){

  console.log('快要到底部了  加载新数据')
  }
}

onMounted(() => {
  // 挂载时监听
  console.log(ScrollRef.value)
  ScrollRef.value.addEventListener('touchmove',scrollHandle)
})
onBeforeUnmount(() => {
  //组件卸载时，停止监听
  console.log('卸载完成',ScrollRef.value.removeEventListener)
  ScrollRef.value.removeEventListener("touchmove", scrollHandle);
});

async function getSongList() {
  const userID = JSON.parse(localStorage.getItem('userInfo'))
  const Data = await playList(userID.id,10)
  SongListData.value = Data.playlist
}
getSongList()

function playlist(id) {
  router.push({path:`/SongListItem/${id}`})
}
</script>

<style scoped lang='less'>
.song-list{
  width: 95%;
  height: 562px;
  background-color:  #f3f3f1;
  margin: 0 auto;
  border-radius: 10px;
  overflow-y: scroll;
  padding-bottom: 102px;
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
