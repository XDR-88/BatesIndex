import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/shopadd',
    name: 'ShopAdd',
    component: () => import(/* webpackChunkName: "shopadd" */ '../views/ShopAdd.vue')
  },
  {
    path: '/shopcategory',
    name: 'ShopCategory',
    component: () => import(/* webpackChunkName: "shopcategory" */ '../views/ShopCategory.vue')
  },
  {
    path: '/shoporder',
    name: 'ShopOrder',
    component: () => import(/* webpackChunkName: "shoporder" */ '../views/ShopOrder.vue')
  },
  {
    path: '/hoteladd',
    name: 'HotelAdd',
    component: () => import(/* webpackChunkName: "hoteladd" */ '../views/HotelAdd.vue')
  },
  {
    path: '/houseadd',
    name: 'HouseAdd',
    component: () => import(/* webpackChunkName: "houseadd" */ '../views/HouseAdd.vue')
  },
  {
    path: '/foodadd',
    name: 'FoodAdd',
    component: () => import(/* webpackChunkName: "foodadd" */ '../views/FoodAdd.vue')
  },
  {
    path: '/hotellist',
    name: 'HotelList',
    component: () => import(/* webpackChunkName: "hotellist" */ '../views/HotelList.vue')
  },
  {
    path: '/houselist',
    name: 'HouseList',
    component: () => import(/* webpackChunkName: "houselist" */ '../views/HouseList.vue')
  },
  {
    path: '/foodlist',
    name: 'FoodList',
    component: () => import(/* webpackChunkName: "foodlist" */ '../views/FoodList.vue')
  },
  {
    path: '/themeadd',
    name: 'ThemeAdd',
    component: () => import(/* webpackChunkName: "themeadd" */ '../views/ThemeAdd.vue')
  },
  {
    path: '/themelist',
    name: 'ThemeList',
    component: () => import(/* webpackChunkName: "themelist" */ '../views/ThemeList.vue')
  },
  {
    path: '/playadd',
    name: 'PlayAdd',
    component: () => import(/* webpackChunkName: "playadd" */ '../views/PlayAdd.vue')
  },
  {
    path: '/playlist',
    name: 'PlayList',
    component: () => import(/* webpackChunkName: "playlist" */ '../views/PlayList.vue')
  },
  {
    path: '/introadd',
    name: 'IntroAdd',
    component: () => import(/* webpackChunkName: "introadd" */ '../views/IntroAdd.vue')
  },
  {
    path: '/introlist',
    name: 'IntroList',
    component: () => import(/* webpackChunkName: "introlist" */ '../views/IntroList.vue')
  },
  {
    path: '/cafeadd',
    name: 'CafeAdd',
    component: () => import(/* webpackChunkName: "cafeadd" */ '../views/CafeAdd.vue')
  },
  {
    path: '/cafelist',
    name: 'CafeList',
    component: () => import(/* webpackChunkName: "cafelist" */ '../views/CafeList.vue')
  },
  {
    path: '/showadd',
    name: 'ShowAdd',
    component: () => import(/* webpackChunkName: "showadd" */ '../views/ShowAdd.vue')
  },
  {
    path: '/showlist',
    name: 'ShowList',
    component: () => import(/* webpackChunkName: "showlist" */ '../views/ShowList.vue')
  },
  {
    path: '/servercategory',
    name: 'ServerCategory',
    component: () => import(/* webpackChunkName: "servercategory" */ '../views/ServerCategory.vue')
  },
  {
    path: '/serveradd',
    name: 'ServerAdd',
    component: () => import(/* webpackChunkName: "serveradd" */ '../views/ServerAdd.vue')
  },
  {
    path: '/serverlist',
    name: 'ServerList',
    component: () => import(/* webpackChunkName: "serverlist" */ '../views/ServerList.vue')
  },
  {
    path: '/questionadd',
    name: 'QuestionAdd',
    component: () => import(/* webpackChunkName: "questionadd" */ '../views/QuestionAdd.vue')
  },
  {
    path: '/questionlist',
    name: 'QuestionList',
    component: () => import(/* webpackChunkName: "questionlist" */ '../views/QuestionList.vue')
  },
  {
    path: '/opertime',
    name: 'OperTime',
    component: () => import(/* webpackChunkName: "opertime" */ '../views/OperTime.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
