import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../views/Counter.vue'
import Todo from '../views/Todo.vue'

const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo // route level code-splitting
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