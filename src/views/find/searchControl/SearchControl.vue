<template>
  <Search>
    <div class='box'>
      <i class='iconfont icon-sousuo'></i>
      <input v-model='searchContent'
             placeholder='美女都喜欢的歌儿'
             type='text' />
    </div>
    <ul v-show='isShow' class='List'>
      <router-link v-for='item in searchData' :to='{path:"/Player",query:{id:item.id}}'>
        <div class='searchData'>
          <div class='iconfont icon-sousuo' />
          <div class='info'>
            <div class='txt'>{{ item.name }}</div>
          </div>
        </div>
      </router-link>
    </ul>
  </Search>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import Search from '../../../components/common/search/Search'
import { getSearch } from '../../../network/find'

const searchData = ref([])
const searchContent = ref('')
const isShow = ref(true)

watch(searchContent, async () => {
  if (searchContent.value === '') {
    isShow.value = false
  } else {
    isShow.value = true
    const res = await getSearch(searchContent.value, 10)
    console.log(res)
    if (res.code === 200) {
      searchData.value = res.result.songs
    }
  }

})
</script>

<style lang='less' scoped>
.box {
  position: relative;

  .iconfont {
    position: absolute;
    left: 11%;
    top: 9px;
    line-height: 30px;
  }

  input {
    height: 30px;
    width: 90%;
    margin-left: 5%;
    border: none;
    background: #f3f3f1;
    border-radius: 17px;
    padding-left: 31px;
    margin-top: 6px;
  }

  ul {
    list-style: none;
    width: 100%;

    span {
      margin-left: -157px;
    }
  }
}

.List {
  list-style-type: none;
  margin-left: 13%;
  margin-top: 8px;
  background: #fff;

  .searchData {
    display: flex;
    color: black;
    background: #fff;
    padding: 10px;
    width: 93%;

    .info {
      display: flex;
      margin-left: 10px;

      .txt {
        margin-left: 3px;
      }
    }
  }
}
</style>
