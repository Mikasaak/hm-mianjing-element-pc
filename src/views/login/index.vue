<template>
  <div class="login-page">
    login
    <el-card class="login-cart" style="border-radius: 12px">
      <template #header>
        <div>
          黑马面经运营后台
        </div>
      </template>
      <el-form :label-position="top"  class="login-form">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
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
     &::before {
       content: '* ';
       color: #f56c6c;
     }
    }
  }
  .login-btn {
    text-align: center;
    margin-bottom: 10px !important;
  }
}

</style>
