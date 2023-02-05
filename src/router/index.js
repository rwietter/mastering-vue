import { createRouter, createWebHashHistory } from 'vue-router'
import Counter from '../views/Counter.vue'
import Todo from '../views/Todo.vue'

const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo // route level code-splitting
  },
  {
    path: '/http',
    name: 'Http',
    component: () => import('../views/HttpRequest.vue') // route level code-splitting
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes
})

export default router;