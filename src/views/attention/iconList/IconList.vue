<template>
    <IconfontList>
      <div class='icon-list' v-for='item in followsRef'>
        <img :style='item.accountStatus === 0 && "border:0"' :src=item.avatarUrl alt='' >
        <div class='list-title'>{{ item.nickname }}</div>
      </div>
    </IconfontList>
</template>

<script setup>
import { ref } from 'vue'
import IconfontList from '../../../components/common/iconfontList/IconfontList'
import { UserConcern } from '../../../network/follows'

const followsRef = ref([])

async function getData(){
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const data = await UserConcern(userInfo.id,10)
  followsRef.value = data.follow
}
getData()


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
