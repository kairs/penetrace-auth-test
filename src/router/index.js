import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/Login'
import navigation from '@/components/Navigation'

import master from '@/pages/master'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'master',
      component: master
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    }
  ]
})
