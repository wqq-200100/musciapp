<template>
  <IconfontList>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanjutuijian"></use>
        </svg>
        <span>我的博客</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang"></use>
        </svg>
        <span>强烈推荐</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihang"></use>
        </svg>
        <span>排行榜</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-airec"></use>
        </svg>
        <span>一起听听</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right"></use>
        </svg>
        <span>看看帅哥</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sirendingzhi"></use>
        </svg>
        <span>看看美女</span>
      </div>
    </div>
    <div class='icon-list'>
      <div class='list-item'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-airec"></use>
        </svg>
        <span>吹吹牛</span>
      </div>
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
    return {}
  }
})
</script>

<style scoped lang='less'>
.list-item{
    width: 74px;
    height: 60px;
    text-align: center;
    margin: 0 5px;
    span{
      font-size: 12px;
    }
    .icon{
      width: 41px;
      height: 41px;
      text-align: center;
      display: block;
      margin: 0 auto;
    }
  }
</style>
