<template>
  <div class="login-form">
    <el-form :model="loginForm">
      <div>
        <h3>登陆窗口</h3>
      </div>
      <el-form-item>
        <el-input v-model="loginForm.username" type="text" placeholder="enter your username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" placeholder="enter your password"></el-input>
      </el-form-item>
      <el-button @click.native.prevent="handleLogin">login</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin111',
        password: '1234'
      }
    }
  },
  methods: {
    handleLogin () {
      console.log(this.loginForm)
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped>
.login-form {
  position: relative;
  width: 320px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>
