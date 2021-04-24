import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Welcome'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
