import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/views/Login')
    },
    {
      path: '/layout',
      component: layout,
      redirect:'/layout/home',
      children:[
        {
          path:'home',
          meta:{
            title:'首页'
          },
          name:'home',
          component: ()=> import('@/views/Home')
        },
        {
          path:'index',
          meta:{
            title:'管理员列表'
          },
          name:'index',
          component: ()=> import('@/views/admin')
        },
        {
          path:'add',
          meta:{
            title:'添加管理员'
          },
          name:'add',
          component: ()=> import('@/views/admin/add')
        },
        {
          path:'swiper',
          meta:{
            title:'轮播图列表'
          },
          name:'swiper',
          component: ()=> import('@/views/swiper')
        },
        {
          path:'addSwiper',
          meta:{
            title:'添加轮播图'
          },
          name:'addSwiper',
          component: ()=> import('@/views/swiper/addSwiper')
        },
        {
          path:'editSwiper',
          meta:{
            title:'编辑轮播图'
          },
          name:'editSwiper',
          component: ()=> import('@/views/swiper/addSwiper')
        },
        {
          path:'news',
          meta:{
            title:'新闻列表'
          },
          name:'news',
          component: ()=> import('@/views/news')
        },
        {
          path:'addNews',
          meta:{
            title:'添加新闻'
          },
          name:'addNews',
          component: ()=> import('@/views/news/addNews')
        },
        {
          path:'classify',
          meta:{
            title:'添加分类'
          },
          name:'classify',
          component: ()=> import('@/views/classify')
        },
        
      ]
    },
  ]
})
