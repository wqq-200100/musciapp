<template>
  <Search>
    <div class='box'>
      <i class='iconfont icon-sousuo'></i>
      <input type='text' placeholder='求求你听听鼓楼叭~~'>
    </div>
  </Search>
</template>

<script>
import { defineComponent } from 'vue'
import Search from '../../../components/common/search/Search'

export default defineComponent({
  components:{
    Search
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>
.box{
  position: relative;
  .iconfont{
    position: absolute;
    left: 7%;
    line-height: 30px;
  }
  input{
    height: 30px;
    width: 90%;
    margin-left: 5%;
    border: none;
    background: #f3f3f1;
    border-radius: 17px;
    padding-left: 31px;
  }
}
</style>
