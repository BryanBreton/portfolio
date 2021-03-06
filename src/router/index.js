import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formations from '../views/Formations.vue'
import Experiences from '../views/Experiences.vue'
import HomeMobile from '../views/HomeMobile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formations',
    name: 'Formations',
    component: Formations
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/homeMobile',
    name: 'homeMobile',
    component: HomeMobile
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
