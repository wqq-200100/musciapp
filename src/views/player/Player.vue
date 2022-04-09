<template>
  <TopBar>
    <template #left>
      <div class='iconfont icon-zuojiantou'></div>
    </template>
    <template #content>
      <div>歌曲名字</div>
    </template>
    <template #right>
      <div class='iconfont icon-fenxiang1'></div>
    </template>
  </TopBar>
</template>

<script setup>
import { defineComponent } from 'vue'
import TopBar from '../../components/common/topbar/TopBar'



</script>

<style scoped lang='less'>
.iconfont{
  font-size: 22px;
  padding: 0 13px;
}
</style>
