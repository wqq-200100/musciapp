<script setup>
import {ref} from "vue";

const active = ref(1)

function handleClick(val) {
  active.value = val
}
</script>

<template>
  <div class="box">
    <div @click="handleClick(1)" class="item" :class="active === 1 && 'active'">热门歌曲</div>
    <div @click="handleClick(2)" class="item" :class="active === 2 && 'active'">最近播放</div>
  </div>
</template>

<style>
.box {
  display: flex;
  flex-direction: row;
}
.active{
  border-bottom: 2px solid #f33;
}
.item{
  flex: 1;
  padding: 10px;
  transition: .5s;
}
</style>
