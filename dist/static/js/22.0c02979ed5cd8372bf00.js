webpackJsonp([22],{"2LGc":function(e,t,n){var a=n("GJxI");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("1a181f39",a,!0)},"5sS8":function(e,t,n){"use strict";function a(e){n("2LGc")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("VjKu"),i=(r.l,n("fHWp")),s={name:"Today",data:function(){return{star_list:[{url:"javascript:",img:n("ZX41"),title:""},{url:"javascript:",img:n("ml2s"),title:""},{url:"javascript:",img:n("ZX41"),title:"",fallbackImg:"https://static.vux.li/demo/3.jpg"}]}},mounted:function(){this.mapInit()},methods:{mapInit:function(){var e,t=new BMap.Map("map"),n=new BMap.Point(113.933268,22.577035),a=new BMap.Point(113.9363382349,22.5750183567),r=new BMap.Point(113.935831,22.575661),i=new BMap.Point(113.9344714174,22.5755632497),s=+t.getDistance(n,a).toFixed(0),o=+t.getDistance(n,r).toFixed(0),d=+t.getDistance(n,i).toFixed(0),m=[s,o,d],A=m.sort(function(e,t){return e-t})[0];s==A?(console.log("a最短，位置是宝安店"),e=a):o==A?(console.log("b最短，位置是福田店"),e=r):d==A&&(console.log("c最短，位置是龙华店"),e=i),console.log(m),console.log(m.sort(function(e,t){return e-t})[0]),t.centerAndZoom(n,50),t.disableDragging();var l=new BMap.Marker(n);t.addOverlay(l);var c=new BMap.Marker(a);t.addOverlay(c);var p=new BMap.Marker(r);t.addOverlay(p);var v=new BMap.Marker(i);t.addOverlay(v);var C=new BMap.Label("深圳市沃菲数字营销",{offset:new BMap.Size(-30,-30)});l.setLabel(C);var h=new BMap.Label("深圳宝安中洲店",{offset:new BMap.Size(-30,-30)});c.setLabel(h);var u=new BMap.Label("深圳福田益田店",{offset:new BMap.Size(-30,-30)});p.setLabel(u);var B=new BMap.Label("深圳南山西丽店",{offset:new BMap.Size(-50,-30)});B.setStyle({color:"#000",fontSize:"0.16rem",backgroundColor:"0.05",border:"0",fontWeight:"bold"}),v.setLabel(B),setTimeout(function(){t.panTo(e)},2e3)}},components:{Swiper:i.a}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"today"},[e._m(0),e._v(" "),a("div",{staticClass:"star"},[a("h4",{staticClass:"two_t_h"},[e._v("明星单品")]),e._v(" "),a("div",{staticClass:"border"},[a("swiper",{staticClass:"banner",attrs:{list:e.star_list,loop:!0,"show-desc-mask":!1,"dots-position":"center",height:"1.7rem"}})],1)]),e._v(" "),a("div",{staticClass:"perfect clearfix"},[a("h4",{staticClass:"two_t_h"},[e._v("得乐良品"),a("span",{staticClass:"fr three_t_m",on:{click:function(t){e.$router.push("/recommend")}}},[e._v("更多商品 >>")])]),e._v(" "),a("img",{staticClass:"banner",attrs:{src:n("ml2s"),alt:""},on:{click:function(t){e.$router.push("/detail")}}})]),e._v(" "),a("div",{staticClass:"position"},[a("h4",{staticClass:"two_t_h"},[e._v("附近的得乐 Café"),a("span",{staticClass:"fr three_t_m",on:{click:function(t){e.$router.push("/home/nearby")}}},[e._v("所有门店 >>")])]),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"enterprise"},[a("h4",{staticClass:"two_t_h"},[e._v("企业订购")]),e._v(" "),a("img",{staticClass:"banner",attrs:{src:n("ml2s"),alt:""},on:{click:function(t){e.$router.push("/personalCenter/enterpriserecommend")}}})])])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top clearfix"},[n("h1",{staticClass:"large_t fl"},[e._v("今日推荐")]),e._v(" "),n("span",{staticClass:"fr avatar"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map clearfix"},[n("div",{staticClass:"left fl"},[n("h5",{staticClass:"three_t_m"},[e._v("离你最近")]),e._v(" "),n("h5",{staticClass:"three_t_h store"},[e._v("深圳宝安中洲店")]),e._v(" "),n("h5",{staticClass:"three_t_m"},[e._v("创业二路与前进路交汇处")]),e._v(" "),n("h5",{staticClass:"three_t_h"},[e._v("营业至 23:00")])]),e._v(" "),n("div",{staticClass:"right fr",attrs:{id:"map"}})])}],m={render:o,staticRenderFns:d},A=m,l=n("Mw9A"),c=a,p=l(s,A,!1,c,"data-v-1687120e",null);t.default=p.exports},GJxI:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,"\n.banner[data-v-1687120e] {\n  width: 3.2rem;\n  height: 1.7rem;\n  display: block;\n  margin-top: 0.05rem;\n  border-radius: 0.12rem;\n  font-size: 0.16rem;\n  margin-bottom: 0.3rem;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a[data-v-1687120e] {\n  border-radius: 0.12rem;\n  overflow: hidden;\n}\n.top[data-v-1687120e] {\n  padding-bottom: 0.15rem;\n}\n.top .avatar[data-v-1687120e] {\n  width: 0.3rem;\n  height: 0.3rem;\n  border-radius: 50%;\n  background-image: url("+n("lS+k")+");\n  background-size: cover;\n  margin-top: 0.09rem;\n}\n.perfect[data-v-1687120e] {\n  height: 2.27rem;\n  width: 3.2rem;\n}\n.position .map[data-v-1687120e] {\n  width: 3.2rem;\n  height: 1.2rem;\n  border: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.12rem;\n  margin-top: 0.05rem;\n  overflow: hidden;\n}\n.position .map .left[data-v-1687120e] {\n  padding: 0.15rem 0 0 0.15rem;\n  width: 50%;\n  height: 1.2rem;\n}\n.position .map .left .store[data-v-1687120e] {\n  margin-bottom: 0.2rem;\n}\n.position .map .right[data-v-1687120e] {\n  width: 50%;\n  height: 1.2rem;\n  border-radius: 0 0.12rem 0.14rem 0;\n  overflow: hidden;\n}\n.enterprise[data-v-1687120e] {\n  margin-top: 0.3rem;\n}\n","",{version:3,sources:["C:/Users/lian.s/Desktop/delemilk/src/components/today/today.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,gDAAiD;EACjD,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,cAAc;CACf;AACD;EACE,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,6BAA6B;EAC7B,WAAW;EACX,eAAe;CAChB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,WAAW;EACX,eAAe;EACf,mCAAmC;EACnC,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB",file:"today.vue",sourcesContent:['\n.banner[data-v-1687120e] {\n  width: 3.2rem;\n  height: 1.7rem;\n  display: block;\n  margin-top: 0.05rem;\n  border-radius: 0.12rem;\n  font-size: 0.16rem;\n  margin-bottom: 0.3rem;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a[data-v-1687120e] {\n  border-radius: 0.12rem;\n  overflow: hidden;\n}\n.top[data-v-1687120e] {\n  padding-bottom: 0.15rem;\n}\n.top .avatar[data-v-1687120e] {\n  width: 0.3rem;\n  height: 0.3rem;\n  border-radius: 50%;\n  background-image: url("../../assets/avatar.jpg");\n  background-size: cover;\n  margin-top: 0.09rem;\n}\n.perfect[data-v-1687120e] {\n  height: 2.27rem;\n  width: 3.2rem;\n}\n.position .map[data-v-1687120e] {\n  width: 3.2rem;\n  height: 1.2rem;\n  border: 0.01rem solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.12rem;\n  margin-top: 0.05rem;\n  overflow: hidden;\n}\n.position .map .left[data-v-1687120e] {\n  padding: 0.15rem 0 0 0.15rem;\n  width: 50%;\n  height: 1.2rem;\n}\n.position .map .left .store[data-v-1687120e] {\n  margin-bottom: 0.2rem;\n}\n.position .map .right[data-v-1687120e] {\n  width: 50%;\n  height: 1.2rem;\n  border-radius: 0 0.12rem 0.14rem 0;\n  overflow: hidden;\n}\n.enterprise[data-v-1687120e] {\n  margin-top: 0.3rem;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=22.0c02979ed5cd8372bf00.js.map