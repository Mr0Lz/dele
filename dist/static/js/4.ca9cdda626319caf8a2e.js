webpackJsonp([4],{IpZT:function(n,a,i){var t=i("q5ld");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);i("8bSs")("0ce73c4c",t,!0)},LOu3:function(n,a,i){"use strict";function t(n){i("IpZT")}Object.defineProperty(a,"__esModule",{value:!0});var e=i("VjKu"),r=(e.g,i("3xZi")),s={name:"Comfirm",data:function(){return{useYuE:!0,useShunFeng:!1,useFaPiao:!0,showPicker:!1,timeList:[["今天","明天"],["10:00-12:00","12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"]],timevalue:["今天","10:00-12:00"]}},methods:{change:function(){this.showPicker=!1},showmyPicker:function(){this.useShunFeng||(this.showPicker=!0)}},components:{PopupPicker:r.a}},o=function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("div",{staticClass:"comfirm"},[n._m(0),n._v(" "),i("div",{staticClass:"detail paddi"},[i("ul",[i("li",{staticClass:"rest clearfix"},[i("span",{staticClass:"iconfont isChecked fl",class:[n.useYuE?"icon-gouxuan":"icon-weixuanzhong"],on:{click:function(a){n.useYuE=!n.useYuE}}}),n._v(" "),i("span",{staticClass:"two_t_h fl"},[n._v("优先使用账户余额")]),n._v(" "),i("span",{staticClass:"fr"},[n._v("¥10")])])])]),n._v(" "),i("div",{staticClass:"pstime paddi"},[i("ul",[i("li",[i("p",{staticClass:"clearfix"},[i("span",{staticClass:"iconfont fl isChecked",class:[n.useShunFeng?"icon-weixuanzhong":"icon-gouxuan"],on:{click:function(a){n.useShunFeng=!1}}}),n._v(" "),i("span",{staticClass:"fl two_t_h jishi",on:{click:function(a){n.showmyPicker()}}},[n._v("即时送（仅限同城）")]),n._v(" "),i("span",{staticClass:"fr two_t_m",on:{click:function(a){n.showmyPicker()}}},[n._v(">")])]),n._v(" "),i("p",{staticClass:"three_t_m tody",on:{click:function(a){n.showmyPicker()}}},[n._v(n._s(n.timevalue[0])+"；"+n._s(n.timevalue[1]))])]),n._v(" "),i("li",{staticClass:"clearfix"},[i("span",{staticClass:"iconfont fl isChecked",class:[n.useShunFeng?"icon-gouxuan":"icon-weixuanzhong"],on:{click:function(a){n.useShunFeng=!0,n.showPicker=!1}}}),n._v(" "),i("span",{staticClass:"fl two_t_h"},[n._v("顺丰速运")])])])]),n._v(" "),i("div",{staticClass:"pricedetail paddi"},[i("ul",[n._m(1),n._v(" "),n._m(2),n._v(" "),i("li",{staticClass:"two_t_h clearfix"},[i("span",{staticClass:"fl"},[n._v("账户余额抵扣")]),n._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:n.useYuE,expression:"useYuE"}],staticClass:"fr"},[n._v("-¥10.00")]),n._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!n.useYuE,expression:"!useYuE"}],staticClass:"fr"},[n._v("-¥0.00")])]),n._v(" "),i("li",{staticClass:"clearfix"},[i("span",{staticClass:"iconfont fl isChecked",class:[n.useFaPiao?"icon-gouxuan":"icon-weixuanzhong"],on:{click:function(a){n.useFaPiao=!n.useFaPiao}}}),n._v(" "),i("span",{staticClass:"fl two_t_h"},[n._v("发票")]),n._v(" "),i("span",{staticClass:"fl two_t_m danwei",on:{click:function(a){n.$router.push("/shoppingBag/invoice")}}},[n._v("单位-深圳市沃菲数字营…")]),n._v(" "),i("span",{staticClass:"fr two_t_m",on:{click:function(a){n.$router.push("/shoppingBag/invoice")}}},[n._v(">")])])])]),n._v(" "),i("div",{staticClass:"beizhu paddi clearfix",on:{click:function(a){n.$router.push("/shoppingBag/remarks")}}},[i("span",{staticClass:"fl two_t_h"},[n._v("订单备注")]),n._v(" "),i("span",{staticClass:"fl word two_t_m"},[n._v("我的酸奶一定要做成咸的…")]),n._v(" "),i("span",{staticClass:"fr two_t_m"},[n._v(">")])]),n._v(" "),i("div",{staticClass:"fanal clearfix"},[i("span",{staticClass:"fl two_t_m"},[n._v("共 ( 1 ) 件商品")]),n._v(" "),i("span",{staticClass:"fr submit",on:{click:function(a){n.$router.push("/shoppingBag/verification")}}},[n._v("提交订单")]),n._v(" "),i("span",{staticClass:"fr price"},[n._v("¥47.00")])]),n._v(" "),i("popup-picker",{staticStyle:{display:"none"},attrs:{show:n.showPicker&&!n.useShunFeng,data:n.timeList},on:{"on-hide":n.change},model:{value:n.timevalue,callback:function(a){n.timevalue=a},expression:"timevalue"}})],1)},c=[function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("div",{staticClass:"address paddi clearfix"},[i("div",{staticClass:"left fl"},[i("p",{staticClass:"two_t_h"},[n._v("王尼玛")]),n._v(" "),i("p",{staticClass:"three_t_tip company"},[n._v("公司")])]),n._v(" "),i("div",{staticClass:"right fr two_t_m"},[n._v("\n            >\n        ")]),n._v(" "),i("div",{staticClass:"center fr"},[i("p",{staticClass:"three_t_h"},[n._v("186****6666")]),n._v(" "),i("p",{staticClass:"three_t_m add"},[n._v("\n                广东省深圳市南山区  西丽街道中山园路 TCL 国际 E 城 F1 栋 A 座 4 层\n            ")])])])},function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("li",{staticClass:"two_t_h clearfix"},[i("span",{staticClass:"fl"},[n._v("价格总计")]),n._v(" "),i("span",{staticClass:"fr"},[n._v("¥57.00")])])},function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("li",{staticClass:"two_t_h clearfix"},[i("span",{staticClass:"fl"},[n._v("配送费")]),n._v(" "),i("span",{staticClass:"fr"},[n._v("¥0.00")])])}],m={render:o,staticRenderFns:c},d=m,A=i("Mw9A"),f=t,l=A(s,d,!1,f,"data-v-92a99b2c",null);a.default=l.exports},q5ld:function(n,a,i){a=n.exports=i("BkJT")(!0),a.push([n.i,"\n.comfirm[data-v-92a99b2c] {\n  font-size: 0.16rem;\n  background-color: #f2f2f2;\n  padding-top: 0.1rem;\n  padding-bottom: 0.6rem;\n}\n.comfirm .paddi[data-v-92a99b2c] {\n  padding: 0 0.27rem 0 0.28rem;\n}\n.comfirm .isChecked[data-v-92a99b2c] {\n  font-size: 0.22rem;\n  padding-right: 0.15rem;\n}\n.comfirm .address[data-v-92a99b2c] {\n  background-color: #fff;\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding-top: 0.15rem;\n  padding-bottom: 0.15rem;\n}\n.comfirm .address .left[data-v-92a99b2c] {\n  text-align: center;\n}\n.comfirm .address .left .company[data-v-92a99b2c] {\n  border: 0.01rem solid #e7290f;\n  border-radius: 0.03rem;\n  padding: 0.015rem 0.08rem;\n  margin-top: 0.06rem;\n}\n.comfirm .address .center[data-v-92a99b2c] {\n  margin-right: 0.3rem;\n}\n.comfirm .address .center .add[data-v-92a99b2c] {\n  width: 2rem;\n}\n.comfirm .address .right[data-v-92a99b2c] {\n  padding: 0.12rem 0rem;\n}\n.comfirm .detail[data-v-92a99b2c] {\n  background-color: #fff;\n  margin: 0.1rem 0rem;\n}\n.comfirm .detail .rest[data-v-92a99b2c] {\n  height: 0.52rem;\n  line-height: 0.52rem;\n}\n.comfirm .pstime[data-v-92a99b2c] {\n  background-color: #fff;\n  padding-top: 0.15rem;\n}\n.comfirm .pstime ul li[data-v-92a99b2c] {\n  padding: 0.15rem 0;\n}\n.comfirm .pstime ul li[data-v-92a99b2c]:nth-child(1) {\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding-top: 0rem;\n}\n.comfirm .pstime ul li .tody[data-v-92a99b2c] {\n  margin-left: 0.37rem;\n}\n.comfirm .pstime ul li .jishi[data-v-92a99b2c] {\n  width: 2.7rem;\n}\n.comfirm .pricedetail[data-v-92a99b2c] {\n  background-color: #fff;\n  margin: 0.1rem 0;\n}\n.comfirm .pricedetail ul li[data-v-92a99b2c] {\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding: 0.15rem 0rem;\n}\n.comfirm .pricedetail ul li[data-v-92a99b2c]:nth-last-child(1) {\n  border: none;\n}\n.comfirm .pricedetail ul li .danwei[data-v-92a99b2c] {\n  width: 2rem;\n  margin-left: 0.15rem;\n}\n.comfirm .beizhu[data-v-92a99b2c] {\n  background-color: #fff;\n  padding-top: 0.15rem;\n  padding-bottom: 0.15rem;\n}\n.comfirm .beizhu .word[data-v-92a99b2c] {\n  width: 2rem;\n  margin-left: 0.15rem;\n}\n.comfirm .fanal[data-v-92a99b2c] {\n  background-color: #fff;\n  height: 0.5rem;\n  position: fixed;\n  width: 100vw;\n  bottom: 0rem;\n  left: 0rem;\n  padding-left: 0.28rem;\n  border-top: 0.01rem solid #f2f2f2;\n}\n.comfirm .fanal span[data-v-92a99b2c] {\n  padding: 0.14rem 0rem;\n}\n.comfirm .fanal .price[data-v-92a99b2c] {\n  font-family: PingFangSC-Regular;\n  font-size: 0.16rem;\n  color: #e7290f;\n  letter-spacing: 0;\n}\n.comfirm .fanal .submit[data-v-92a99b2c] {\n  padding: 0 0.18rem;\n  height: 0.5rem;\n  background-color: #e7290f;\n  font-family: PingFangSC-Regular;\n  font-size: 0.16rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.5rem;\n  margin-left: 0.2rem;\n}\n","",{version:3,sources:["C:/Users/lian.s/Desktop/delemilk/src/components/comfirm/comfirm.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,qCAAqC;EACrC,qBAAqB;EACrB,wBAAwB;CACzB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,8BAA8B;EAC9B,uBAAuB;EACvB,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;CACb;AACD;EACE,sBAAsB;CACvB;AACD;EACE,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,qBAAqB;CACtB;AACD;EACE,uBAAuB;EACvB,qBAAqB;CACtB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qCAAqC;EACrC,kBAAkB;CACnB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,cAAc;CACf;AACD;EACE,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,qCAAqC;EACrC,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,qBAAqB;CACtB;AACD;EACE,uBAAuB;EACvB,qBAAqB;EACrB,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,qBAAqB;CACtB;AACD;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,kCAAkC;CACnC;AACD;EACE,sBAAsB;CACvB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,0BAA0B;EAC1B,gCAAgC;EAChC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;CACrB",file:"comfirm.vue",sourcesContent:["\n.comfirm[data-v-92a99b2c] {\n  font-size: 0.16rem;\n  background-color: #f2f2f2;\n  padding-top: 0.1rem;\n  padding-bottom: 0.6rem;\n}\n.comfirm .paddi[data-v-92a99b2c] {\n  padding: 0 0.27rem 0 0.28rem;\n}\n.comfirm .isChecked[data-v-92a99b2c] {\n  font-size: 0.22rem;\n  padding-right: 0.15rem;\n}\n.comfirm .address[data-v-92a99b2c] {\n  background-color: #fff;\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding-top: 0.15rem;\n  padding-bottom: 0.15rem;\n}\n.comfirm .address .left[data-v-92a99b2c] {\n  text-align: center;\n}\n.comfirm .address .left .company[data-v-92a99b2c] {\n  border: 0.01rem solid #e7290f;\n  border-radius: 0.03rem;\n  padding: 0.015rem 0.08rem;\n  margin-top: 0.06rem;\n}\n.comfirm .address .center[data-v-92a99b2c] {\n  margin-right: 0.3rem;\n}\n.comfirm .address .center .add[data-v-92a99b2c] {\n  width: 2rem;\n}\n.comfirm .address .right[data-v-92a99b2c] {\n  padding: 0.12rem 0rem;\n}\n.comfirm .detail[data-v-92a99b2c] {\n  background-color: #fff;\n  margin: 0.1rem 0rem;\n}\n.comfirm .detail .rest[data-v-92a99b2c] {\n  height: 0.52rem;\n  line-height: 0.52rem;\n}\n.comfirm .pstime[data-v-92a99b2c] {\n  background-color: #fff;\n  padding-top: 0.15rem;\n}\n.comfirm .pstime ul li[data-v-92a99b2c] {\n  padding: 0.15rem 0;\n}\n.comfirm .pstime ul li[data-v-92a99b2c]:nth-child(1) {\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding-top: 0rem;\n}\n.comfirm .pstime ul li .tody[data-v-92a99b2c] {\n  margin-left: 0.37rem;\n}\n.comfirm .pstime ul li .jishi[data-v-92a99b2c] {\n  width: 2.7rem;\n}\n.comfirm .pricedetail[data-v-92a99b2c] {\n  background-color: #fff;\n  margin: 0.1rem 0;\n}\n.comfirm .pricedetail ul li[data-v-92a99b2c] {\n  border-bottom: 0.01rem solid #f2f2f2;\n  padding: 0.15rem 0rem;\n}\n.comfirm .pricedetail ul li[data-v-92a99b2c]:nth-last-child(1) {\n  border: none;\n}\n.comfirm .pricedetail ul li .danwei[data-v-92a99b2c] {\n  width: 2rem;\n  margin-left: 0.15rem;\n}\n.comfirm .beizhu[data-v-92a99b2c] {\n  background-color: #fff;\n  padding-top: 0.15rem;\n  padding-bottom: 0.15rem;\n}\n.comfirm .beizhu .word[data-v-92a99b2c] {\n  width: 2rem;\n  margin-left: 0.15rem;\n}\n.comfirm .fanal[data-v-92a99b2c] {\n  background-color: #fff;\n  height: 0.5rem;\n  position: fixed;\n  width: 100vw;\n  bottom: 0rem;\n  left: 0rem;\n  padding-left: 0.28rem;\n  border-top: 0.01rem solid #f2f2f2;\n}\n.comfirm .fanal span[data-v-92a99b2c] {\n  padding: 0.14rem 0rem;\n}\n.comfirm .fanal .price[data-v-92a99b2c] {\n  font-family: PingFangSC-Regular;\n  font-size: 0.16rem;\n  color: #e7290f;\n  letter-spacing: 0;\n}\n.comfirm .fanal .submit[data-v-92a99b2c] {\n  padding: 0 0.18rem;\n  height: 0.5rem;\n  background-color: #e7290f;\n  font-family: PingFangSC-Regular;\n  font-size: 0.16rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.5rem;\n  margin-left: 0.2rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.ca9cdda626319caf8a2e.js.map