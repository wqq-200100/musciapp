<template>
  <div class='top-control'>
    <TopBar>
      <template #content>
        <div class='title-center'>
            <div class='box'>
              <i class='iconfont icon-jiahao'></i>
              <input type='button' value='添加状态' >
            </div>
        </div>
      </template>
      <template #right>
        <div class='iconfont icon-sousuo'></div>
      </template>
    </TopBar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TopBar from '../../../components/common/topbar/TopBar'

export default defineComponent({
  components:{
    TopBar
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.icon-sousuo{
  font-size: 21px;
  margin: 0 5px;
}
.title-center{
  height: 25px;
  margin-top: 7px;
  .box{
    position: relative;
    .iconfont{
      position: absolute;
      left: 42%;
      line-height: 25px;
    }
    input{
      height: 25px;
      width: 27%;
      margin-left: 5%;
      border: none;
      background: #f3f3f1;
      border-radius: 17px;
      padding-left: 16px;
    }
  }
}
</style>
