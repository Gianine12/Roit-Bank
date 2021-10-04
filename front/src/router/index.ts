import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

// import Cadastro from '@/components/Cadastro.vue'
// import Modal from '@/components/Modal.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'Cadastro',
  //   component: Cadastro
  // },
  // {
  //   path: '/modal',
  //   name: 'Modal',
  //   component: Modal,
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
