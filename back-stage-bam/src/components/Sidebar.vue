<template>
  <div>
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
          <template slot="title">
            <span>首页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="home">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/">
              <span slot="title">登录</span>
            </el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>管理员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="index">管理员列表</el-menu-item>
          <el-menu-item index="add">添加管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>轮播图管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="swiper">轮播图列表</el-menu-item>
          <el-menu-item index="addSwiper">添加轮播图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>新闻管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="news">新闻列表</el-menu-item>
          <el-menu-item index="addNews">编辑新闻</el-menu-item>
          <el-menu-item index="classify">添加分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
 
  </div>
</template>

<script>
  export default {
    naem:'sidebar'
  }
</script>

<style scoped lang="scss">
.el-menu-vertical-demo{
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;


}
</style>