import Vue from 'vue'
import Router from 'vue-router'
import today from '@/page/today'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: today
    },
    {
      path: '/today',
      name: 'today',
      component: today
    },
    {
      path: '/order',
      name: 'order',
      component: today
    },
    {
      path: '/personal',
      name: 'personal',
      component: today
    }
  ]
})
