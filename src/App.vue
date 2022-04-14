<template>
  <router-view />
  <div v-show='isDefaultLayout'>
    <Bottom/>
  </div>
</template>

<script setup>
import Bottom from '@/components/content/bottom/Bottom.vue'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

let router = useRouter()
const isDefaultLayout = ref()
// 监听路由地址发生改变
watch(() => router.currentRoute.value.path, newValue => {
  isDefaultLayout.value = newValue !== '/Player' && newValue !== '/Login' && newValue !== '/'
})
</script>

<style lang='less' scoped>
@import "assets/css/base.css";
</style>
