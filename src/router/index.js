import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Starred from '../views/Starred.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dictionary',
    component: Home
  },
  {
    path: '/starred',
    name: 'Starred',
    component: Starred
  },
  {
    path: '/:title',
    name: 'Single',
    component: Single
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
