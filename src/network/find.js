import { request } from './request'

// 获取推荐歌单
export function RecommendSongList(limit) {
  return request({
    url: `/personalized?limit=${limit}`
  })
}

// 获取最近播放歌曲
export function recommendSons() {
  return request({
    url: `/record/recent/song?limit=${10}`
  })
}

// 获取banner
export function getBanner() {
  return request({
    url: `/banner?type=2`
  })
}

// 获取首页小图标
export function getIcon() {
  return request({
    url: `/homepage/dragon/ball`
  })
}

// 获取歌曲详情
export function getMusic(ids) {
  return request({
    url: `/song/detail?ids=${ids}`
  })
}

// 获取歌曲url
export function getMusicUrl(id) {
  return request({
    url: `/song/url?id=${id}`
  })
}

// 获取歌词
export function getMusicLyric(id) {
  return request({
    // url: `/lyric?id=${id}`
    url: `/lyric?id=${33894312}`
  })
}

// 获取歌单所有歌曲
export function getPlayListAll(id) {
  return request({
    url: `/playlist/track/all?id=${id}&limit=10`
  })
}

// 搜索关键词
export function getSearch(keywords,limit) {
  return request({
    url: `/search?keywords=${keywords}&limit=${limit}`
  })
}
