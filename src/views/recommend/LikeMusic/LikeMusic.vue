<template>
  <div class='like-music'>
    <div class='like-top'>
      <div>
        <img src='../../../assets/image/img1.jpg' alt=''>
        <div class='title'>官方电台</div>
      </div>
      <div>
        <img src='../../../assets/image/img3.jpg' alt=''>
        <div class='title'>动漫语录</div>
      </div>
      <div>
        <img src='../../../assets/image/img2.jpg' alt=''>
        <div class='title'>美女与野兽哇哈哈</div>
      </div>
    </div>
    <div class='like-bottom'>
      <div>
        <img src='../../../assets/image/img5.jpg' alt=''>
        <div class='title'>官方电台</div>
      </div>
      <div>
        <img src='../../../assets/image/img4.jpg' alt=''>
        <div class='title'>巴卡马卡唧唧哇哇</div>
      </div>
      <div>
        <img src='../../../assets/image/img6.jpg' alt=''>
        <div class='title'>不要吹牛牛会飞哈哈哈哈哈</div>
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
.like-music{
  height: 437px;
  img{
    width: 120px;
    height: 120px;
    border-radius: 10px;
    box-shadow: 0 2px 7px #666;
  }
  .like-top,.like-bottom{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    .title{
      text-align: center;
      width: 120px;
      height: 40px;
      overflow: hidden;
    }
  }
}
</style>
