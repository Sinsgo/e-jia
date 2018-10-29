<template>
  <div class="layout">
    <div class="header ml-200">
      <Header></Header>
    </div>
    <div class="sidebar">
       <Sidebar ></Sidebar>
    </div>
    <div class="main-content ml-200">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
  export default {
    components:{
      Header,
      Sidebar,
    }
  }
</script>

<style lang="scss">
.layout{
  
  .ml-200{
    margin-left: 200px;
  }
  .main-content{
    padding: 15px;
  }
 .main-content .el-card{
  min-height: calc(100vh - 133.99px)
 }
}

</style>