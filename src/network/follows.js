import { request } from './request'

// 获取用户关注
export function UserConcern(uid,limit) {
  return request({
    url: `/user/follows?uid=${uid}`
  })
}

// 获取热门话题
export function topic() {
  return request({
    url: `/hot/topic?limit=30&offset=0`
  })
}
