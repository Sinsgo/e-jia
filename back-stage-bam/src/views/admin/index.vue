<template>
  <div class="user">
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="用户姓名" prop="username"></el-table-column>
        <el-table-column label="昵称" prop="nickname"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="头像" prop="avatar">
          <template slot-scope="scope"> 
            <img :src="scope.row.avatar" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
             {{scope.row.sex ? '男' : '女'}}
          </template>
        </el-table-column>
        <el-table-column label="个性签名" prop="desc"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mine">查看详细</el-button>
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
      getData(){
        this.$axios.get('/admin/adminUser/list').then(res=>{
          if(res.code == 200){
            this.tableData = res.data
          }
        })
      },
      formatRole(row,column){
        return row.sex ==  '1' ? '男' : row.sex == '0' ? '女' : '男'
      }
    },
    computed:{
      
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>

</style>