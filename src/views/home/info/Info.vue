<template>
  <img :src='data.avatarUrl' alt=''>
  <div class='info'>
    <div class='info-name'>{{ data.nickname }}</div>
    <div class='info-msg'>
      <span>11 关注</span>
      <span>3 粉丝</span>
      <span>Lv.99</span>
    </div>
  </div>
</template>
<script>
import { getUserInfoByID } from '@/network/userAPI'
import { reactive } from 'vue'


export default {
  setup() {
    let data = reactive({
      avatarUrl:'',
      nickname: ''
    })

    async function getUserINfo() {
      const res = await getUserInfoByID(269987313)
      data.avatarUrl = res.profile.avatarUrl
      data.nickname = res.profile.nickname
    }
    getUserINfo()
    return { data }
  }
}
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
