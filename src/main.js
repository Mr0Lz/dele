// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//兼容IE9+,低版本安卓
import 'babel-polyfill'
//rem
import './config/rem'
//使用svg-sprite-loader 处理svg
import './config/svgSprite'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
