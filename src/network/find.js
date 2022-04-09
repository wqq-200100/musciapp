import { request } from './request'

// 获取搜索关键字
export function SearchItemName(keywords) {
  return request({
    url: `search/multimatch?keywords=${keywords}`
  })
}

// 获取推荐歌单
export function RecommendSongList(limit) {
  return request({
    url: `/personalized?limit=${limit}`
  })
}

// 获取每日推荐歌曲
export function recommendSons() {
  return request({
    url: `/recommend/songs`
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
