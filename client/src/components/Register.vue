<template>
  <el-row type="flex" :gutter="20" justify="space-around"> 
   <el-col :span="6">
    <el-card>
      <div>
        <h1>Create an account</h1>
        <el-input type="email" name="name" placeholder="Enter your email" suffix-icon="el-icon-mail" v-model="email">
        <template slot="prepend">@</template>  
        </el-input><br>
        <div style="margin-top: 10px;">
          <el-input type="password" name="password" placeholder="Enter your Password" suffix-icon="el-icon-setting" v-model="password"></el-input><br>
        </div>
        <div style="margin-top: 10px;">
          <el-button type="primary" @click="register">Register</el-button>
        </div>
        <p class="error" v-html="error" />
      </div>
    </el-card>
   </el-col>
  </el-row>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      success: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.autom {
  margin: auto;
}

.success {
  color: green;
}
.error {
  color: red;
}
</style>
