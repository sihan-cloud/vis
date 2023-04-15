import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('../views/Main.vue')
    }
  ]
})

export default router
