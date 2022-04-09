<template>
    <div class='banner'>
      <a-carousel autoplay >
        <img v-for='item in bannerList' :src='item.pic'>
      </a-carousel>
    </div>
</template>

<script>
import { defineComponent,ref } from 'vue'
import { Carousel} from 'ant-design-vue'
import { getBanner } from '../../../network/find'

export default defineComponent({
  components:{
    Carousel
  },
  setup() {
    let bannerList = ref([])

    async function dataInit() {
      const { code, banners } = await getBanner()
      if(code === 200){
        banners.forEach(e => {
          bannerList.value.push(e)
        })
      }
    }
    dataInit()
    return {
      bannerList
    }
  }
})
</script>

<style scoped lang='less'>
.banner{
  margin-top: 52px;
  width: 100%;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 150px;
  line-height: 150px;
  background: #364d79;
  overflow: hidden;
  border-radius: 15px;
}
</style>
