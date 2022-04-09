import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component:() => import('../views/login/Login.vue')
  },
  {
    path: '/find',
    component:() => import('../views/find/Find.vue')
  },
  {
    path: '/recommend',
    component:() => import('../views/recommend/Recommend.vue')
  },
  {
    path: '/home',
    component:() => import('../views/home/Home.vue')
  },
  {
    path: '/attention',
    component:() => import('../views/attention/Attention.vue')
  },
  {
    path: '/cloud',
    component:() => import('../views/cloud/Cloud.vue')
  },
  {
    path: '/test',
    component:() => import('../views/test/index')
  },
  {
    path: '/Player',
    component:() => import('../views/player/Player.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
