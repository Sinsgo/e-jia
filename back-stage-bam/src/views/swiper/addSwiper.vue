<template>
  <div>
    <el-card>
      <el-form :model="formData">
      <el-form-item label="轮播图标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="轮播图">
        <uploadAvatar v-model="formData.img"> </uploadAvatar>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="formData.sort" :min="1" :max="1000"/>
      </el-form-item>
      <el-form-item label="是否显示">
        <el-switch
          v-model="formData.status"
          active-text="YES"
          inactive-text="NO"
          :active-value="1"
          :inactive-value="0">
        </el-switch>
      </el-form-item>
      <el-form-item label="新闻标题">
        <el-select v-model="formData.newsSt">
          <el-option
            v-for="(item,index) in news" 
           :label="item.title" 
           :value="item._id" 
           :key="index">
          </el-option>
        </el-select>
      </el-form-item>
       <el-button type="primary" @click="handleSwiper" v-if="!isEdit">
         提交
       </el-button>
       <el-button type="danger" @click="handleSave" v-else>
         保存修改
       </el-button>
    </el-form>
  </el-card>
    
  </div>
</template>

<script>
import uploadAvatar from '@/components/upload'
import { setTimeout } from 'timers';
  export default {
    data(){
      return{
        formData:{
          title:"",
          img:"",
          newsSt:"",
          status:"",
          sort:""
        },
        news:[],
        isEdit:false
      }
    },
    methods:{
      getNews(){
        this.$axios.get('/admin/news').then(res=>{
          this.news = res.data
        })
      },
      handleSwiper(){
        this.$axios.post('/admin/swiper',this.formData).then(res=>{
           this.$message.success(res.msg)
          setTimeout(() => {
            this.$router.push({name:'swiper'})
          }, 1000);
        })
      },
      getEditData(){
        const id = this.$route.query.id
        this.$axios.get(`/admin/swiper/${id}`).then(res=>{
          this.formData = res.data
          console.log(this.formData)
        })
      },
      handleSave(){
        const id = this.$route.query.id
        console.log(id)
        this.$axios.patch(`/admin/swiper/${id}`,this.formData).then(res=>{
          if(res.code == 200){ 
            this.$message.success(res.msg)
            this.$router.push({name:'swiper'})
          }
        })
      }
    },
    created(){
        if(this.$route.name == 'editSwiper'){
          this.isEdit = true
        }else{
          this.isEdit = false
        }
      this. getNews()
      if(this.isEdit){
        this. getEditData()
      }
      this.formData ={
          title:"",
          img:"",
          newsSt:"",
          status:"",
          sort:""
      }
    },
    watch:{
      $route(to,from){
        if(to.name == 'editSwiper'){
          this.isEdit = true
        }else{
          this.isEdit = false
        }
      }
    },
    components:{
      uploadAvatar
    }
  }
</script>

<style scoped>

</style>