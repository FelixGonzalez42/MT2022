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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/compras',
    name: 'Compras',
    component: () => import(/* webpackChunkName: "about" */ '../views/Compras.vue')
  },
  {
    path: '/alimentos',
    name: 'Alimentos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Alimentos.vue')
  },
  {
    path: '/animales',
    name: 'Animales',
    component: () => import(/* webpackChunkName: "about" */ '../views/Animales.vue')
  },
  {
    path: '/plantas',
    name: 'Plantas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Plantas.vue')
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Herramientas.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
