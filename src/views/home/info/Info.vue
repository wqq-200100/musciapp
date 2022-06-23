<template>
  <img :src='infoData.avatarUrl' alt=''>
  <div class='info'>
    <div class='info-name'>{{ infoData.nickname }}</div>
    <div class='info-msg'>
      <span>{{infoData.newFollows}} 关注</span>
      <span>3 粉丝</span>
      <span>Lv.{{infoData.vipType}}</span>
    </div>
  </div>
</template>
<script setup>
import { getUserInfoByID } from '@/network/userAPI'
import { ref } from 'vue'

const infoData = ref([])

async function getUserInfo() {
  const data = await getUserInfoByID(269987313)
  infoData.value = data.profile
}
getUserInfo()
</script>

<style scoped lang='less'>
.info {
  width: 95%;
  height: 122px;
  background-color: #f3f3f1;
  margin: 20px auto 0;
  border-radius: 5px;
  text-align: center;
  padding-top: 38px;

  .info-name {
    font-size: 20px;
    font-weight: 900;
    padding: 2px;
  }

  .info-msg span {
    padding: 0 7px;
    color: #777;
  }
}

img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  left: 44%;
  top: 50px;
}
</style>
