import { createWebHistory, createRouter } from 'vue-router'

import PageHome from '../pages/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})