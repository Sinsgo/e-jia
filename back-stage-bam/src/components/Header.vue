<template>
   <div class="Header">
     <div>
        <h2 class="title">后台管理系统</h2>
     </div>
    <div class="centen">
      <div class="miaob">
       <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
     <div class="left">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    </div>
    
  </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.Header{
 
 .title{
   
   text-align: center;
   color: skyblue;
   font-weight: 400;
   height: 50px;
   line-height: 2;
   border-bottom: 1px solid #f1f1f1f1;
 }
.centen{
  height: 50px;
  border-bottom: 1px solid #f1f1f1f1;
  display: flex;
  .miaob{ 
   margin: auto 30px;
   flex: 8;
 }
 .left{
   flex: 1;
    margin: auto;
 }
}
 
}
</style>