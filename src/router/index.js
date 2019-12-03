import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'MainLayout',
    // component: () => import('@/views/MainPage.vue')
    component: MainPage
  },
  {
    path: '/article/:id',
    name: 'ArticleDetails',
    component: () => import('@/views/ArticleDetails.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category.vue')
  },
  {
    path: '/new',
    name: 'NewArticle',
    component: () => import('@/views/NewArticle.vue')
  },
  {
    path: '/me',
    name: 'AboutMe',
    component: () => import('@/views/AboutMe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
