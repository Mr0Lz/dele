'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const os=require('os');
var interfaces=os.networkInterfaces();
var ip=null;
//webpack-dev-server  配置autoOpenBrowser=true,server的open=true,
//根据host配置自动打开浏览器,host:0.0.0.0 局域网和本地使用locahost,127.0.0.1能访问,
//打开浏览器是根据host:0.0.0.0所以本地是访问不了
//解决 1.自动获取电脑ip  能在本地和局域网内打开
//2.用opn  自己写打开浏览器的功能

for(var k in interfaces){
  interfaces[k].forEach(function (currentValue, index, arr) {
      if(currentValue.family=="IPv4"&&currentValue.mac!='00:00:00:00:00:00'){
        ip=currentValue.address;
      }
    });
}


module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: [
      {
        context: ['/v1/t', '/v1/user'],
        target:'http://localhost:3000'
      }
    ],//前后端分离,本地开发api用http://127.0.0.1:8080/;线上用:http://dele-server-dele-server.1d35.starter-us-east-1.openshiftapps.com/

    // Various Dev Server settings
    //host: '0.0.0.0', // can be overwritten by process.env.HOST
    host: ip,
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
