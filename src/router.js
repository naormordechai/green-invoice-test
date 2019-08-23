import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import Welcome from './views/Welcome'
import UserDetails from './views/UserDetails'
import store from '../src/stores/store';

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!store.getters.loggedInUser) {
    next('/')
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      beforeEnter: requireAuth
    },
    {
      path: '/details',
      name: 'details',
      component: UserDetails,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
