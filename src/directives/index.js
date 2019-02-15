// 全局vue自定义指令
import test from './test'

//Vue.js 的插件应该有一个公开方法 install https://cn.vuejs.org/v2/guide/plugins.html
// 使用Vue.use(....)使用插件  1. Vue.xxx可以添加全局方法或属性 2.Vue.directive 添加全局资源 
//3.Vue.mixin注入组件 4. 添加实例方法 Vue.prototype.$xxx
export default {
    install(Vue,options){
        Vue.directive('test',test);
    }
}