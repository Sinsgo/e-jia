<template>
  <div class="news">
    <el-card>
      <div slot="header">
       添加新闻
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="新闻头图">
         <uploadAvatar v-model="formData.img"> </uploadAvatar>
      </el-form-item>
        <el-form-item label="新闻标题" required>  
          <el-input v-model="formData.title">
          </el-input>
       </el-form-item>
        <el-form-item label="作者" required>  
         <el-select v-model="formData.author">
           <el-option 
           v-for="(item,index) in users" 
           :label="item.nickname" 
           :value="item._id" 
           :key="index">
           </el-option>
         </el-select>
       </el-form-item>
        <el-form-item label="新闻内容">  
            <quill-editor v-model="formData.content"
                ref="myQuillEditor"
                :options="editorOption"
                 @change="editorChange($event)">
            </quill-editor>
       </el-form-item>
       <el-form-item>
        <el-form-item label="新闻分类">
          <el-select v-model="formData.type">
            <el-option
              v-for="item in categoryes"
              :key="item.value"
              :label="item.title"
              :value="item._id">
            </el-option>
          </el-select>
      </el-form-item>
       </el-form-item>
       <el-button type="primary" @click="handleSubmit">
         提交
       </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import uploadAvatar from '@/components/upload'
  import axios from 'axios'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'


  export default {
     
    data(){
      return{
        formData:{
          title:"",  //*
          content:"", //*
          contentText:"", //*
          img:"", //*
          author:"", //*
          type:"", //*
        },
        token:"",
        users:[],
        categoryes:[],
        editorOption:{
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action:"https://upload-z1.qiniup.com",
              response: (res) => {
                return res.url
              },
               change: (xhr, formData) => {
                formData.append('token', this.token)
                }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    
    methods:{
      getUser(){
        this.$axios.get('/admin/adminUser/list').then(res=>{
          if(res.code == 200){
             this.users = res.data
          }
        })
      },
      getToken(){
        axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
            this.token = res.data.data
          
        })
      },
      editorChange({ quill, html, text }){
        this.formData.contentText = text
      },
      handleSubmit(){
        this.$axios.post('/admin/news',this.formData).then(res=>{
          this.$message.success(res.msg)
          this.$router.push({name:'news'})
        })
      },
      getCategory(){
        this.$axios.get('/admin/category').then(res=>{
          this.categoryes = res.data
        })
      }
    },
    
    created(){
      this.getToken()
      this.getUser()
      this.getCategory()
    },
    components:{
      uploadAvatar,
      quillEditor
    }
  }
</script>

<style>
.ql-editor{
  min-height: 200px;
}
</style>