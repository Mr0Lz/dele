import Vue from 'vue'
import Router from 'vue-router'

//import today from '@/page/today/today' //首页,今日推荐页面
//import personal from '@/page/personal/personal' //个人中心页面
//import shoppingBag from '@/page/shoppingBag/shoppingBag' //购物袋页面
//import productDetails from '@/page/productDetails/productDetails'//产品详情页面
// phoneOperation //绑定手机 更改手机 等相关操作
//webpack中利用require.ensure()实现按需加载

//测试用
const test = r => require.ensure([],() => r(require('@/page/testPage/test')),'test')
const testScroll = r => require.ensure([],() => r(require('@/page/testPage/children/testScroll')),'testScroll')
const testData = r => require.ensure([],() => r(require('@/page/testPage/children/testData')),'testData')


const today = r => require.ensure([],() => r(require('@/page/today/today')),'today')
const personal = r => require.ensure([],() => r(require('@/page/personal/personal')),'personal')
const shoppingBag = r => require.ensure([],() => r(require('@/page/shoppingBag/shoppingBag')),'shoppingBag')
const productDetails = r => require.ensure([],() => r(require('@/page/productDetails/productDetails')),'productDetails')
const personalInfo = r => require.ensure([],() => r(require('@/page/personal/personalInfo')),'personalInfo')
const phoneOperation = r => require.ensure([],() => r(require('@/page/phoneOperation/phoneOperation')),'phoneOperation')
const bindHelp = r => require.ensure([],() => r(require('@/page/phoneOperation/bindHelp')),'bindHelp')
const resultPage = r => require.ensure([],() => r(require('@/page/resultPage/resultPage')),'resultPage')
const about = r => require.ensure([],() => r(require('@/page/about/about')),'about')
const protocol = r => require.ensure([],() => r(require('@/page/about/protocol')),'protocol')
const myOrder = r => require.ensure([],() => r(require('@/page/myOrder/myOrder')),'myOrder')

Vue.use(Router)

export default new Router({
  //mode: 'history',//去掉域名后面的/#/,不可以静态显示,这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面 使用真正的url 不使用 hash 模式 
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
      path: '/test',
      name: 'test',
      component: test,
      children: [
        {
          path: 'scroll',component: testScroll
        },
        {
          path: 'data',component: testData
        }
      ]
    },
    {
      path: '/shoppingBag',
      name: 'shoppingBag',
      component: shoppingBag
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/about/protocol',
      name: 'protocol',
      component: protocol
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: productDetails
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    },
    {
      path: '/result',
      name: 'resultPage',
      component: resultPage,
    },
    {
      path: '/phone/help',//优先级比'/phone/:type'高,放前面,
      name: 'bindHelp',
      component: bindHelp
    },
    {
      path: '/phone/:type',//或者在'/phone/:type'下用children '/phone/:type/help'
      name: 'phoneOperation',//phoneOperation页面中用 <router-view> 结合css动画显示
      component: phoneOperation,
      // children: [{path: 'help',component: bindHelp}]
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    }
  ]
})
