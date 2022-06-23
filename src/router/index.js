import { createRouter, createWebHistory } from 'vue-router'
import SongList from '../components/common/songlist/SongList'

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
    component:() => import('../views/home/Home.vue'),
    children:[
      { path:'SongList', component:() => import('../views/home/songList/SongList.vue') },
    ]
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
    path: '/Player',
    component:() => import('../views/player/Player.vue')
  },
  {
    path: '/SongListItem/:id',
    name:'SongListItem',
    component:() => import('../views/home/songListItem/SongListItem.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
