<template>
  <div>
    <el-card>
      <div slot="header">
        轮播图列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="轮播图标题" prop="title"/>
        <el-table-column  label="轮播图头图">
          <template slot-scope="scope"> 
            <img :src="scope.row.img"  class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="新闻标题"  prop="newsSt.title"/>
        <el-table-column label="排序" prop="sort" :min="1" :max="1000"/>
         <el-table-column label="是否显示">
          <template slot-scope="scope">
             {{scope.row.status ? 'Yes' : 'NO'}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mine" @click="handleEdit(scope.row._id)">编辑</el-button>
            <el-button type="danger" size="mine">删除</el-button>
          </template>
        </el-table-column> 
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getSwiper(){
        this.$axios.get('/admin/swiper').then(res=>{
          this.tableData = res.data
        })
      },
      handleEdit(id){
        this.$router.push({name:'editSwiper',query:{id}})
      }
    },
    created(){
      this.getSwiper()
    }
  }
</script>

<style scoped>

</style>