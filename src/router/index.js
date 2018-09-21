import Vue from 'vue'
import Router from 'vue-router'
import recommendedToday from '@/page/recommendedToday'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: recommendedToday
    },
    {
      path: '/recommendedToday',
      name: 'recommendedToday',
      component: recommendedToday
    }
  ]
})
