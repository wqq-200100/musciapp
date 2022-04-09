export const  rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur' // 失去焦点验证
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是三位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
