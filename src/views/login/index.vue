<template>
  <div class="login-page">
    login
    <el-card class="login-cart" style="border-radius: 12px">
      <template #header>
        <div>
          黑马面经运营后台
        </div>
      </template>
      <el-form :label-position="'top'" ref="loginForm"  class="login-form" :model="loginForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        if (!/^\w{5,12}$/.test(value)) {
          callback(new Error('长度在 5 到 12 个字符'))
        } else {
          callback()
        }
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['change', 'blur'] },
          // { pattern: /^\w{5,12}$/, message: '长度在 5 到 12 个字符', trigger: ['change', 'blur'] }
          { validator: validateUsername, trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['change', 'blur'] },
          { pattern: /^\w{8,16}$/, message: '长度在 8 到 16 个字符', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        await this.$refs.loginForm.validate()
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
      }
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.login-cart {
  width: 420px;
  margin: 0 auto;
  ::v-deep .el-card__header {
    height: 80px;
    text-align: center;
    background-color: #727cf5;
    color: aliceblue;
    font-size: 18px;
    line-height: 40px;
  }
}
.login-form {
  padding: 0 20px;
  .el-form-item {
   ::v-deep .el-form-item__label {
    }
  }
  .login-btn {
    text-align: center;
    margin-bottom: 10px !important;
  }
}

</style>
