<template>
  <div>
    <div class="register">
      <h1>注册</h1>
      <div>
        <div>
          <label for="newusername">用户名：</label>
          <input type="newusername" value="" placeholder="请输入用户名" v-model="newusername">
        </div>
        <div>
          <label for="newpassword">密码：</label>
          <input type="newpassword" value="" placeholder="请输入密码" v-model="newpassword">
        </div>
        <div>
          <label for="confirmpassword">确认密码：</label>
          <input type="confirmpassword" value="" placeholder="请再次确认密码" v-model="confirmpassword">
        </div>
        <button @click="register()">提交注册</button><br>
        <span @click="login">已有帐号？立即登录11</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newusername:'',
      newpassword:'',
      confirmpassword:''
    }
  },
  methods:{
    register(){
      console.log('注册')
      if(this.newusername == '' || this.newpassword == ''){
        alert('用户名不能为空')
      }else{
         axios.post('/articles/new1', {
       name:this.newusername,
       password:this.newpassword
     }).then(res => {
        console.log(res.data)
         this.$router.push('/login')
        
			})
      }
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.login{
  text-align:center;
}
a {
  color: #42b983;
}
</style>
