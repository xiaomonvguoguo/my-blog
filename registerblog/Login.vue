<template>
  <div>
    <div class="login">
      <h1>登录</h1>
      <div>
        <div>
          <label for="username">用户名：</label>
          <input type="username" value="username" placeholder="请输入用户名" v-model="username">
        </div>
        <div>
          <label for="password">密码：</label>
          <input type="password" value="password" placeholder="请输入密码" v-model="password">
        </div>
        <button @click="login">提交登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.get('/sessions/create').then(res =>{
          console.log(res.data)
      })
      console.log('登录');
    }
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}

a {
  color: #42b983;
}
</style>
