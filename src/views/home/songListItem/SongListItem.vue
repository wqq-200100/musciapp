<template>
  <div class='SongListItem' @scroll='handleScroll'>
    <div class='songTop' style='background:orange'>
      <div class='songTopLeft'>
        <div class='iconfont icon-zuojiantou' @click='BackTo'></div>
        <div class='iconfont name'>歌单</div>
      </div>
      <div class='songTopRight'>
        <div class='iconfont icon-sousuo'></div>
        <div class='iconfont icon-sangedian'></div>
      </div>
    </div>
    <div class='songInfo'>
      <img alt='' src='../../../assets/image/img3.jpg'>
      <div class='songtype'>
        <div class='type'>缓慢</div>
        <div class='usreinfo'>
          <img alt='' src='../../../assets/image/img1.jpg'>
          <div class='username'>哈哈哈哈</div>
        </div>
        <div class='editing'>编辑信息 ></div>
      </div>
    </div>

    <div ref='scroll' class='ListContent'>
      <div class='contentBtn'>
        <div class='BtnItem'>
          <div class='iconfont icon-right'></div>
          <div class='BtnText'>收藏</div>
          <div class='line'></div>
        </div>
        <div class='BtnItem'>
          <div class='iconfont icon-pinglun1'></div>
          <div class='BtnText '>评论</div>
          <div class='line'></div>
        </div>
        <div class='BtnItem'>
          <div class='iconfont icon-fenxiang1'></div>
          <div class='BtnText'>分享</div>
        </div>
      </div>
      <div class='playListVip'>
        <div class='viptitle'>
          <div class='iconfont icon-sirendingzhi'></div>
          <div class='vipCount'>含3首VIP专享歌曲</div>
        </div>
        <div class='vipmoney'>vip首月0.88元 ></div>
      </div>

      <div :class='isFlextotop && "flex-to-top"' class='playall'>
        <div class='allLeft'>
          <div class='iconfont icon-bofang'></div>
          <div class='playalltitle'>播放全部</div>
          <div class='palycount'>(16)</div>
        </div>
        <div class='allRight'>
          <div class='iconfont icon-xiazai'></div>
          <div class='iconfont icon-right'></div>
        </div>
      </div>

      <div v-for='(item, index) in playListAllRef.songs' class='allsonglist'>
        <div class='songall'>
          <div class='index'>{{ index + 1 }}</div>
          <div class='songinfo'>
            <div class='songname'>{{ item.name }}</div>
            <div class='singger'>
              <span v-for='i in item.ar'>{{ i.name }} </span>
            </div>
          </div>
        </div>
        <div class='type'>
          <div class='iconfont icon-bofang' @click='getMusicDataAction(item.id)'></div>
          <div class='iconfont icon-sangedian'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getPlayListAll } from '../../../network/find'
import { useRouter } from 'vue-router'
import { getMusicDataAction } from '../../../store/actions'
import { playList } from '../../../network/userAPI'

const playListAllRef = ref([])
const router = useRouter()
const { id } = router.currentRoute.value.params
const isFlextotop = ref(false)
const scroll = ref()
const boxOffsetTop = ref(0)

onMounted(() => {
  // 目标到顶部的距离
  boxOffsetTop.value = scroll.value.offsetTop
  // 添加滚动事件
  window.addEventListener('scroll', handleScroll)
})
const timeOutKey = ref(null)
const firstTime = ref(null)

function BackTo() {
  router.go(-1)
}

// 间隔时间 回调函数 最大时间(毫秒)
function jieLiu(time, target, maxTime) {
  // 计时器 和 第一次触发时间都为空的情况, 记录第一次触发时间，绑定timeout事件
  if (firstTime.value === null) {
    firstTime.value = new Date()
    timeOutKey.value = setTimeout(target, time)
  } else {
    // 如果不是第一次触发则使用当前事件减去第一次时间，判断是否超过最大时常
    const curTime = new Date()
    if (curTime - firstTime.value >= maxTime) {
      // 超过最大时常立即执行，清空第一次触发的时间
      target()
      firstTime.value = null
    } else {
      // 没有超过则清除上一次的延迟事件，并绑新的延时事件
      clearTimeout(timeOutKey.value)
      timeOutKey.value = setTimeout(target, time)
    }
  }
}

function handleScroll() {
  jieLiu(100, () => {
    // 滚动时获取屏幕位置，是否大于目标到顶部的距离
    if (window.pageYOffset >= boxOffsetTop.value) {
      isFlextotop.value = true
    } else {
      isFlextotop.value = false
    }
    // 执行完成后清除第一次事件的时间从新计时
    firstTime.value = null
  }, 300)
}

async function setupData() {
  const res = await getPlayListAll(id)
  playListAllRef.value = res
}
setupData()

</script>

<style lang='less' scoped>
.SongListItem {
  background: orange;
  height: 100vh;
  color: #fff;
  overflow-y: scroll;

  .songTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 999;

    .songTopLeft, .songTopRight {
      display: flex;
    }

    .songTopLeft {
      margin-left: -24px;
    }

    .iconfont {
      font-size: 22px;
      margin-top: -4px;
      margin-left: 26px;
    }

    .name {
      font-size: 20px;
      font-weight: 600;
    }

    .icon-zuojiantou {
      font-size: 28px;
      margin-top: -8px;
    }
  }

  .songInfo {
    height: 200px;
    display: flex;
    background: orange;
    width: 100vw;
    margin-top: 55px;

    img {
      width: 140px;
      height: 140px;
      border-radius: 9px;
      margin-top: 10px;
      margin-left: 19px;
    }

    .songtype {
      margin-left: 16px;
      margin-top: 10px;

      .usreinfo {
        display: flex;
        align-items: center;
        margin-top: 35px;
        margin-left: -18px;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .username {
          margin-left: 7px;
          font-size: 15px;
          margin-top: 15px;
        }
      }

      .type {
        font-size: 18px;
        font-weight: 500;
      }

      .editing {
        margin-top: 18px;
      }
    }
  }

  .ListContent {
    width: 100vw;
    height: 1000px;
    background: #fff;
    position: absolute;

    .contentBtn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 290px;
      height: 49px;
      background: #fff;
      border-radius: 40px;
      margin: 0 auto;
      position: absolute;
      top: -25px;
      left: 16vw;
      box-shadow: 0 12px 13px -16px gray,0 -12px 11px -18px gray;
      padding: 0 24px;

      .BtnItem {
        display: flex;
        align-items: center;
        color: black;

        .iconfont {
          font-size: 23px;
          padding-right: 4px;
        }

        .line {
          height: 24px;
          border-right: 2px solid rgb(222, 225, 230);
          margin-left: 18px;
        }
      }
    }
  }

  .playListVip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    color: black;
    font-size: 16px;
    padding: 0 15px;
    border: 1px solid rgb(243, 243, 241);
    border-radius: 9px;

    .viptitle {
      display: flex;
      align-items: center;

      .iconfont {
        color: #ff3333;
        font-size: 30px;
      }

      .vipCount {
        margin-left: 10px;
      }
    }

    .vipmoney {
      color: gray;
    }
  }

  .playall {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 15px 8px;
    font-size: 16px;

    .allLeft, .allRight {
      display: flex;

      .iconfont {
        font-size: 25px;
      }

      .icon-xiazai {
        margin-right: 20px;
      }
    }

    .allLeft {
      align-items: center;

      .iconfont {
        color: #ff3333;
      }

      .playalltitle {
        font-weight: 600;
        margin-left: 15px;
      }

      .palycount {
        margin-left: 10px;
        color: #888888;
      }
    }
  }

  .flex-to-top {
    position: fixed;
    background: #fff;
    top: 49px;
    left: 0;
    right: 0;
  }

  .allsonglist {
    display: flex;
    color: black;
    justify-content: space-between;
    padding: 8px 12px;

    .songall, .type {
      display: flex;
      align-items: center;

      .iconfont {
        font-size: 22px;
        color: #888888;
      }

      .icon-bofang {
        margin-right: 15px;
      }

      .songinfo {
        margin-left: 30px;

        .songname {
          font-size: 16px;
        }

        .singger {
          color: #777777;
        }
      }
    }
  }
}

</style>
