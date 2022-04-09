import { request } from './request'

// 获取用户信息
export function getUserInfoByID(id){
  return request({
    url:`/user/detail?uid=${id}`,
  })
}

// 获取账号密码
export function login(phone,psw){
  return request({
    url:`/login/cellphone?phone=13548162664&password=qw89937257`,
  })
}
