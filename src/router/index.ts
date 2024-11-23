import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/index/index.vue')
    
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
    
      {
        path: '/activity1',
        component: () => import('@/views/Activity 1/index.vue')
        
      },
      {
        path: '/activity2',
        component: () => import('@/views/Activity 2/index.vue')
        
      },
      {
        path: '/activity3',
        component: () => import('@/views/Activity 3/index.vue')
        
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router