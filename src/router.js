import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/angers',
      name: 'angers',
      // route level code-splitting
      // this generates a separate chunk (angers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "angers" */ './views/Angers.vue')
    },
    {
      path: '/fears',
      name: 'fears',
      component: () => import(/* webpackChunkName: "fears" */ './views/Fears.vue')
    },
    {
      path: '/cares',
      name: 'cares',
      component: () => import(/* webpackChunkName: "cares" */ './views/Cares.vue')
    },
    {
      path: '/angers/:story',
      name: 'anger-index',
      component: () => import(/* webpackChunkName: "cares" */ './views/Anger/index.vue')
    }
  ]
})
