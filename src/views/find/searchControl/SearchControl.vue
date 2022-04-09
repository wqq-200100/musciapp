<template>
  <Search>
    <div class='box'>
      <i class='iconfont icon-sousuo'></i>
      <input type='text' placeholder='美女都喜欢的歌儿' @click='$router.push()'>
    </div>
  </Search>
</template>

<script>
import { defineComponent,reactive} from 'vue'
import Search from '../../../components/common/search/Search'
import { SearchItemName } from '../../../network/find.js'

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
    left: 11%;
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
  ul{
    list-style: none;
    width: 100%;
    span{
      margin-left: -157px;
    }
  }
}
</style>
