import Vue from 'vue'
import Router from 'vue-router'

import today from '@/page/today/today' //首页,今日推荐页面
import personal from '@/page/personal/personal' //个人中心页面
import shoppingBag from '@/page/shoppingBag/shoppingBag' //购物袋页面
import productDetails from '@/page/productDetails/productDetails'//产品详情页面

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
      path: '/shoppingBag',
      name: 'shoppingBag',
      component: shoppingBag
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      children:[
        {
          path: '/info',
        }
      ]
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: productDetails
    }
  ]
})
