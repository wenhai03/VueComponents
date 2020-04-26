<template>
  <div>
    <h3>Element表单</h3>
    <hr>

    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput type="text" v-model="model.username" placeholder="请填写用户名"></KInput>
      </KFormItem>

      <KFormItem label="用户密码名11" prop="password">
        <KInput type="password" v-model="model.password" placeholder="请填写密码"></KInput>
      </KFormItem>

      <KFormItem>
        <button @click="onLogin('loginForm')">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
  import KForm from "./KForm"
  import KFormItem from "./KFormItem"
  import KInput from "./KInput"

  // import Notice from "@/components/notice/KNotice";

  export default {
    components: {
      KForm,
      KFormItem,
      KInput
    },
    data () {
      return {
        model: {username: "", password: ""},
        rules: {
          username: [{required: true, message: "请输入用户名"}],
          password: [{required: true, message: "请输入密码"}]
        }
      }
    },
    methods: {
      onLogin () {
        this.$refs.loginForm.validate((isValid) => {
            if (isValid) {
              alert('登录！！！')
            } else {
              alert('有错！！')
            }
          }
        )
      }
    }
  }
</script>
