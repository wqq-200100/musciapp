<template>
    <h1>网易云音乐</h1>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol" :rules='rules'>
    <a-form-item label="用户名 " v-bind="validateInfos.name" name='username'>
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="密码" v-bind="validateInfos.psw" name='password'>
      <a-input v-model:value="modelRef.psw" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
      <a-button style="margin-left: 10px" @click="reset">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, reactive, toRaw } from 'vue';
import { useRouter } from 'vue-router'
import { Form } from 'ant-design-vue';
import { rules } from './config/rules'
import { getUserInfoByID, login} from '../../network/userAPI'
const useForm = Form.useForm;

export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      psw: ''
    });
    const {
      resetFields,
      validate,
      validateInfos,
    } = useForm(modelRef, reactive({
      name: [{
        required: true,
        message: 'Please input name',
      }],
      psw: [{
        required: true,
        message: 'Please input password',
      }],
    }));

    const router = useRouter()
    const onSubmit = () => {
      validate().then(async res => {
        const loginRes = await login(res)

        // console.log(loginRes)
        if(loginRes.code === 200){
          const userInfo = await getUserInfoByID(loginRes.account.id)
          const cookie = loginRes.cookie
          localStorage.setItem('cookie',cookie)
          // 保存到Storage中
          localStorage.setItem('userInfo',JSON.stringify(userInfo))
          await router.push('/find')
        }
      }).catch(err => {
        console.log('error', err);
      });
    };

    const reset = () => {
      resetFields();
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      rules
    };
  },
});
</script>

<style scoped lang='less'>
.ant-form {
  width: 60%;
  margin: 147px auto;
}
h1{
  padding-top: 110px;
  padding-left: 30%;
}
</style>
