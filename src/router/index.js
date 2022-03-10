import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',
    redirect: '/find'
  },

  {
    path: '/find',
    component:() => import('../views/find/find.vue')
  },
  {
    path: '/recommend',
    component:() => import('../views/recommend/recommend.vue')
  },
  {
    path: '/home',
    component:() => import('../views/home/home.vue')
  },
  {
    path: '/attention',
    component:() => import('../views/attention/attention.vue')
  },
  {
    path: '/cloud',
    component:() => import('../views/cloud/cloud.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
