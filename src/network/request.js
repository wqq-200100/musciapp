import axios from 'axios'
// 保存cookie
axios.defaults.withCredentials = true

export function request(config) {
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
