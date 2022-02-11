import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WatchList from '../views/WatchList.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: WatchList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
