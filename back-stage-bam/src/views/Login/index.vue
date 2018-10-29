<template>
  <div class="login">
    <div class="login-box">
      <h2>e家后台管理系统</h2>
      <el-form :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" type="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button @click="handleLogin" type="primary" class="block-button">
          登录
        </el-button>
      </el-form-item>
      </el-form>  
    </div>   
  </div>
</template>

<script>
  export default {
    name:'index',
    data(){
      return{
        formData:{
          username:'admin',
          password:'admin',
        }
      }
    },
    methods:{
      handleLogin(){
        this.$axios.post('/admin/adminUser/login',this.formData).then(res=>{
          if(res.code == 200){
            
            this.$message.success(res.msg)
            setTimeout(()=>{
               this.$router.push('/layout')
            },1000)
          }else{
            this.$message.info(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
 .login{
   background: #2d3a4b;
   height: 100vh;
   overflow: hidden;
  
  h2{
        height: 50px;
        color: #fff;
        font-weight: 400;
        text-align: center;
      }
   
  .login-box{
      padding: 20px;
      margin: 250px auto;
      width: 500px;
      height: 400px;
      border: 1px solid #f1f1f1;
      border-radius: 6px;
      box-sizing: border-box;

      /deep/ .el-input{
        background: #2d3a4b;
        border: none;
      }
      /deep/ .el-form-item__label{
        color: #fff;
        font-size: 14px;
      }
      .block-button{
        
        display: block;
        width: 100%;
        box-sizing: border-box;
      }
  }
  
 }
</style>