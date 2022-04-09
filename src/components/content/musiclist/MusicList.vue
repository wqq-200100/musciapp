<template>
  <div class='music-list'>
    <div class='top'>
      <div class='title'>每日推荐</div>
      <div class='more'>更多 &gt;</div>
    </div>
    <div class='list'>
      <div class='content'>
        <div v-for='item in data' @click='goto'>
          <img :src='item.picUrl' alt=''>
          <div class='text'>{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent,reactive } from 'vue'
import { useRouter } from 'vue-router'

import { RecommendSongList } from '../../../network/find'

export default defineComponent({
  components:{
  },
  setup() {
    let data = reactive([])
    const router = useRouter()

    async function songList() {
      const res =await RecommendSongList(10)
      if (res.code === 200){
        res.result.forEach(e => {
          data.push(e)
        })
      }
    }
    songList()

    function goto(){
      router.push('/Player')
    }
    return {
      data,
      goto
    }
  }
})
</script>

<style scoped lang='less'>
  .music-list{
    padding: -1px 10px;
    border-top: 2px solid rgb(243,243,241);

  .top{
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    .title{
      font-size: 16px;
      font-weight: 900;
    }
    .more{
      border: 1px solid #666666;
      padding: 1px;
      border-radius: 12px;
      width: 55px;
      text-align: center;
    }
  }
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  .content{
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;

      span{
        color: #666666;
        text-align: center;
      }
      div{
        height: 145px;
        color: #fff;
        margin-right:11px;
      }

      .text{
        color: #666666;
        text-align: center;
        width: 92px;
        height: 43px;
        overflow: hidden;
      }
      img{
        width: 95px;
        height: 90px;
        border-radius: 8px;
        box-shadow: 0 2px 7px #666;
      }
    }
  }
</style>
