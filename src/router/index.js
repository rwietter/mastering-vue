import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') // route level code-splitting
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue') // route level code-splitting
  }
]

const router = createRouter({
  history: createWebHistory('http://localhost:5173/'),
  routes
})

export default router;