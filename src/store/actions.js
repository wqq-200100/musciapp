// 定义动作 对一个操作 可以操作多个mutations的一个封装 异步获取
import { getMusic, getMusicLyric, getMusicUrl } from '../network/find'
import store from './index'

export async function getMusicDataAction(id) {
  const getMusicRes = await getMusic(id)
  const songs = getMusicRes.songs[0].al

  // 保存歌曲信息
  const musicInfo = {
    name:songs.name,
    picUrl:songs.picUrl,
    id:songs.id
  }
  const getMusicUrlRes = await getMusicUrl(id)
  // 保存歌曲url
  const musicUrl = getMusicUrlRes.data[0].url

  localStorage.setItem('musicInfo',JSON.stringify({ ...musicInfo, musicUrl }))

  store.commit('musicUrlSetter', { musicUrl, musicInfo })
}

export async function reqLyric(payload) {
  console.log('payload')
  let result = await getMusicLyric(payload.id)
  console.log(result)
}
