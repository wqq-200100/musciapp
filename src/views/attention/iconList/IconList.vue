<template>
    <IconfontList>
      <div class='icon-list'>
        <img :src='img' alt=''>
        <div class='list-title'>我的圈子</div>
      </div>
      <div class='icon-list'>
        <img src='../../../assets/image/img4.jpg' alt=''>
        <div class='list-title'>清鱿</div>
      </div>
      <div class='icon-list'>
        <img src='../../../assets/image/img2.jpg' alt=''>
        <div class='list-title'>巴卡马卡~</div>
      </div>
      <div class='icon-list'>
        <img src='../../../assets/image/img6.jpg' alt=''>
        <div class='list-title'>我是大漂亮</div>
      </div>
      <div class='icon-list'>
        <img src='../../../assets/image/img5.jpg' alt=''>
        <div class='list-title'>嗨害嗨</div>
      </div>
      <div class='icon-list'>
        <img src='../../../assets/image/img1.jpg' alt=''>
        <div class='list-title'>嗨害嗨</div>
      </div>
    </IconfontList>
</template>

<script>
import { defineComponent } from 'vue'
import IconfontList from '../../../components/common/iconfontList/IconfontList'

export default defineComponent({
  components:{
    IconfontList
  },
  setup() {
    const userInfo = localStorage.getItem('userInfo')
    const img = JSON.parse(userInfo).profile.avatarUrl
    return {
      img
    }
  }
})
</script>

<style scoped lang='less'>
.icon-list{
  margin-left: 20px;
  height: 97px;
  margin-top: 33px;
  .list-title{
    margin-top: 3px;
    font-size: 12px;
    text-align: center;
  }
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid red;
  }

}
</style>
