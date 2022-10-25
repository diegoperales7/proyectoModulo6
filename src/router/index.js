import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/encomiendas',
    name: 'encomiendasView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "encomiendasView" */ '../views/EncomiendasView.vue')
  },
  {
    path: '/encomiendas/:id/editar',
    name: 'editarEncomiendaView',
    component: () => import(/* webpackChunkName: "editarEncomiendaView" */ '../views/EditarEncomiendaView.vue')
  },
  {
    path: '/destinatarios',
    name: 'destinatariosView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "destinatariosView" */ '../views/DestinatariosView.vue')
  },
  {
    path: '/destinatarios/:id/editar',
    name: 'editarDestinatarioView',
    component: () => import(/* webpackChunkName: "editarDestinatarioView" */ '../views/EditarDestinatarioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
