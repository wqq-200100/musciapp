<template>
  <div class='title'>
    <div class='home'>
      <div class='iconfont icon-yunboke'> 歌房</div>
    </div>
    <div class='square'>广场</div>
    <div>热门</div>
    <div>现场</div>
    <div>情感</div>
    <div>ACG</div>
  </div>
  <div class='live'>
    <div class='live-list'>
      <div class='list-left'>
        <div class='state'>演唱中</div>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img4.jpg' alt=''>
      </div>
      <div class='list-right'>
        <div class='state'>演唱中</div>
        <div class='info-name'>把卡把卡</div>
        <div class='info-num'>9.3万</div>
        <img src='../../../assets/image/img6.jpg' alt=''>
      </div>
    </div>
    <div class='live-list'>
      <div class='list-left'>
        <div class='info-name'>巴啦啦小魔仙</div>
        <div class='info-num'>9.99万</div>
        <img src='../../../assets/image/img1.jpg' alt=''>
      </div>
      <div class='list-right'>
        <div class='state'>演唱中</div>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img3.jpg' alt=''>
      </div>
    </div>
    <div class='live-list'>
      <div class='list-left'>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/image.jpg' alt=''>
      </div>
      <div class='list-right'>
        <div class='state'>演唱中</div>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img5.jpg' alt=''>
      </div>
    </div>
    <div class='live-list'>
      <div class='list-left'>
        <div class='state'>演唱中</div>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img6.jpg' alt=''>
      </div>
      <div class='list-right'>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img2.jpg' alt=''>
      </div>
    </div>
    <div class='live-list'>
      <div class='list-left'>
        <div class='info-name'>巴啦啦小魔仙</div>
        <div class='info-num'>9.99万</div>
        <img src='../../../assets/image/img1.jpg' alt=''>
      </div>
      <div class='list-right'>
        <div class='state'>演唱中</div>
        <div class='info-name'>而哈哈</div>
        <div class='info-num'>2.3万</div>
        <img src='../../../assets/image/img3.jpg' alt=''>
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
.title{
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  margin: 53px 10px 0;
  .square{
    border-bottom: 4px solid red;
  }
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.live{
  width: 95%;
  height: 529px;
  margin: 10px auto;
  overflow: scroll;
  .live-list{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .list-left,.list-right{
      position: relative;
      img{
        width: 192px;
        height: 202px;
        border-radius: 9px;
      }
      .state{
        position: absolute;
        top: 10px;
        left: 5px;
        background-color: #777777;
        color: #ffffff;
        border-radius: 8px;
        width: 55px;
        text-align: center;
      }
      .info-name{
        position: absolute;
        bottom: 3px;
        color: #ffffff;
        margin-left: 10px;
      }
      .info-num{
        position: absolute;
        bottom: 3px;
        color: #ffffff;
        right: 13px;
      }
    }
  }
}
</style>
