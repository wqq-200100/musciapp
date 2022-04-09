<template>
  <IconfontList>
    <div class='icon-list' v-for='item in iconList'>
      <div class='list-item' >
        <img class='icon' :src='item.iconUrl' alt=''>
        <span >{{ item.name }}</span>
      </div>
    </div>
  </IconfontList>
</template>
<script>
import { defineComponent,ref} from 'vue'
import IconfontList from '../../../components/common/iconfontList/IconfontList'
import { getIcon } from '../../../network/find'

export default defineComponent({
  components:{
    IconfontList
  },
  setup() {
    const iconList = ref([])

    async function iconInfo(){
      const { code,data } = await getIcon()
      if(code === 200){
        data.forEach((e =>{
          iconList.value.push(e)
        }))
      }
    }
    iconInfo()
    return {iconList}
  }
})
</script>

<style scoped lang='less'>
.list-item{
    width: 74px;
    height: 66px;
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
      background: #f33;
      border-radius: 50%;
    }
  }
</style>
