import Vue from 'vue'
import Router from 'vue-router'
import today from '@/page/today' //首页,今日推荐页面
import personal from '@/page/personal' //个人中心页面


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/today'//默认首页:重定向至today页面
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
      component: personal
    }
  ]
})
