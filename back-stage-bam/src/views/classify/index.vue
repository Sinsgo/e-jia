<template>
  <div class="classify">
    <el-card>
      <div slot="header">
        添加分类
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="分类标题">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="分类图标">
           <uploadAvatar v-model="formData.icon"> </uploadAvatar>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="handleClassify">
        提交
      </el-button>
    </el-card>
  </div>
</template>

<script>
import uploadAvatar from '@/components/upload'
  export default {
    data(){
      return{
        formData:{
          title:'',
          icon:''
        }
      }

    },
    methods:{
      handleClassify(){
        this.$axios.post('/admin/category',this.formData).then(res=>{
          console.log(res)
          if(res.code == 200){
             this.formData = res.data
          }
         
        })
      },
    },
     components:{
      uploadAvatar,
     
    }
  }
</script>

<style scoped>

</style>