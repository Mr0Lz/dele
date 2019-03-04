<template>
    <section>
        <p>企业名称:{{companyConfig.name}}</p>
        <p>企业电话:{{companyConfig.telephone}}</p>
        <p>企业logo:<img class="logo" :src="companyConfig.logo"></p>
        <p>网页可见区域宽：document.body.clientWidth{{clientWidth}}</p>
        <p>网页可见区域宽：document.body.offsetWidth (包括边线的宽){{offsetWidth}}</p>
        <p>屏幕分辨率的宽：window.screen.width{{width}}</p>
        <p>屏幕可用工作区宽度：window.screen.availWidth{{availWidth}}</p>
        <loading style="width:0.6rem;"></loading>
        <svg class="logo">
            <use xlink:href="#logo"></use>
        </svg>
        <transition name="fade"  >
            <layer v-if="showLayer">
                <div class="layer-content" slot="layer-content">
                    <div class="coupon">
                        <div class="coupon-btn" @click="closeLayer"></div>
                    </div>
                    <span class="close-btn" @click="closeLayer">关闭</span>
                </div>
            </layer>
        </transition>
        <transition name="up">
            <layer v-if="showShoppingCart">
                <div :class="['cart-content','cart-content-in']"  slot="layer-content">
                    <div class="close-icon" @click="closeCar"></div>
                    <div class="commodity" v-for=" (item,index) in commodityArr"    :key="index" >
                            <div class="commodity-container m-t m-l">
                                <div  class="commodity-img left">
                                    <img  :src="item.imgUrl" alt="">
                                </div>
                                <ul class="left">
                                    <li class="h-2 commodity-name">{{item.commodityName}}</li>
                                    <li class="commodity-details">180g/盒; 五盒/套</li>
                                    <li class="commodity-price">¥{{item.commodityPrice}}</li>
                                </ul>
                            </div>
                            <hr>
                        <span class="gray">数量：</span>
                        <quantity @changeVal="changeVal(item,$event)"  maxVal="6" minVal="1" class="commodity-quantity right" :initVal="item.quantity"></quantity>
                    </div>
                    <div class="cart-btn" @click="closeCar">确定</div>
                </div>
            </layer>
        </transition>     
        <div class="link-box">
            <star :len="5" :score="0" :val="1" ></star>
            <router-link to="/myOrder">我的订单</router-link>     
            <router-link to="/myOrder?hashnav=4">我的订单 待收货</router-link>  
            <span @click="showTestLayer">showTestLayer</span>  
            <span @click="addShoppingCart">加入购物车</span>      
            <router-link to="/phone/bind">绑定手机</router-link>
            <router-link to="/about">关于我们</router-link>
            <router-link to="/about/protocol">协议</router-link>
            <router-link to="/phone/change">更换手机</router-link>
            <router-link to="/phone/examine">验证手机</router-link>
            <router-link to="/shoppingBag?flage=1&invalid=1">购物车</router-link>
            <router-link to="/phone/help">绑定手机遇到问题</router-link>
            <router-link to="/result?title=更改成功&btnText=查看个人资料&msg=手机号码更改成功&callBack=toPersonalInfo">更改成功</router-link>
            <router-link to="/result?title=绑定成功&btnText=查看个人资料&msg=手机绑定成功&callBack=toPersonalInfo">手机绑定成功</router-link>
            <router-link to="/result?title=商城&btnText=查看订单详情&msg=下单成功&details=已收到您的订单，我们会尽快安排配送 敬请您耐心等候&callBack=toPersonalInfo">下单成功</router-link>
            <router-link to="/result?title=商城&btnText=订单详情&msg=评价成功&details=已收到您的宝贵评价，谢谢您， 我们会继续努力，做得更好。&callBack=toPersonalInfo">评价成功</router-link>
            <router-link to="/result?title=商城&btnText=售后详情&msg=提交成功&details=抱歉，得乐的商品没能让您满意， 请放心，客服会尽快处理您的售后申请。&callBack=toPersonalInfo">提交成功</router-link>
        </div>  
    </section>
</template>

<script>
import loading from '@/components/loading/loading'
import star from '@/components/star/star'
import layer from '@/components/layer/layer'
import quantity from "@/components/quantity/quantity"
//企业信息
import companyConfig from '@/config/companyConfig'

export default {
    name : 'test',
    data : function (){
        return {
            clientWidth:document.body.clientWidth,
            offsetWidth:document.body.offsetWidth,
            width:window.screen.width,
            availWidth:window.screen.availWidth,
            companyConfig:companyConfig,
            showLayer:false,
            showShoppingCart:false,
            commodityArr:[
                // {
                //     commodityId:'1',
                //     commodityName:'芒果酸奶1',
                //     imgUrl:'static/mangguo.png',
                //     commodityPrice:'122.00',
                //     quantity:0
                // },
                {
                    commodityId:'2',
                    commodityName:'芒果酸奶2',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'123.00',
                    quantity:7
                }]
        }
    },
    components : {
        star,
        layer,
        quantity,
        loading
    },
    methods : {
        closeLayer(){
            this.showLayer = false;
        },
        showTestLayer(){
            this.showLayer = true;
        },
        closeCar($event){
            let content=$event.target.parentNode;
            content.className+=' cart-content-out'//添加关闭动画
            this.showShoppingCart = false;
        },
        addShoppingCart(){
            this.showShoppingCart = true;
        },
        changeVal(item,val){
            console.log(item,val);
           item.quantity=val;
        },
    }
}
</script>

<style scoped lang="scss">
    @import '../../style/mixin.scss';
    p{
        font-size: 0.16rem;
    }
    .logo{
        display: block;
        width: 1rem;
        margin: 0 auto;
    }
    .link-box{
        a,span{
            display: inline-block;
            font-size: 16px;
            margin: 10px;
        }
    }
    .layer-content{
        position: relative;
        top: 20%;
        @include wh(2.8rem,3.2rem);
        margin: 0 auto;
        .coupon{
            @include wh(100%,100%);
            background: url(../../images/coupon.png) no-repeat center;
            background-size: 100%;
        }
        .coupon-btn{
            @include absolute(72%,14%);
            @include wh(2rem,0.4rem);
            margin: 0 auto;
        }
        span{
            position: absolute;
            bottom: -30%;
            left: 40%;
            color: $white;   
            font-size: 0.16rem;     
            padding-top: 0.4rem;                        
            background: url(../../images/remove.png) no-repeat ;
            background-size: 0.32rem;
        }
    }
    .cart-content{
        position: absolute;
        bottom: 0;
        left: 0;
        @include wh(100%,3.2rem);
        background: $white;       
        font-size: 0.16rem;
        overflow: scroll;
        padding-bottom:0.6rem; 
        .close-icon{
            @include wh(0.18rem,0.18rem);
            position: absolute;
            right: 0.27rem;
            top: 0.27rem;
            background: url(../../images/remove_fill.png) no-repeat center;
            background-size:100%; 
        }
        .cart-btn{
            position: fixed;
            bottom: 0;
            left: 0;
            color: $white;
            @include wh(100%,0.5rem);
            background: $red;
            line-height: 0.5rem;
            text-align: center;
        }
    }
    .cart-content-in{
        animation: zoomInUp 1.2s;
    }
    .cart-content-out{
        animation: zoomOutDown 1.2s;
    }
    .fade-enter-active, .fade-leave-active,.up-enter-active, .up-leave-active {
        transition: all 0.8s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
        transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
    .fade-enter-to,.fade-leave{
        opacity: 1;
    }
    .up-enter,.up-leave-to{
        opacity: 0;
    }
    .up-enter-to,.up-leave{
        opacity: 1;
    }


@keyframes zoomInUp{

from {
	opacity: 0;
	-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
	transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
	-webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}
60% {
	opacity: 1;
	-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}
   

@keyframes zoomOutDown{

40% {
	opacity: 1;
	-webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	-webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
}
to {
	opacity: 0;
	-webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
	transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
	-webkit-transform-origin: center bottom;
	transform-origin: center bottom;
	-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
}
}


/* 商品详情---加入购物车 */
    @include hr();
    .commodity{
        font-size: 0.12rem;
       .commodity-container{
           overflow: hidden;
           margin-bottom: 0.15rem;
        }
      .commodity-name{
            color: $black;
            padding-left: 0.15rem;
        }
        .commodity-img{
            @include wh(0.8rem,0.8rem);
            @include borderRadius();
        }
        li{
            padding-left: 0.15rem;
            color: $gray;
        }
        .commodity-details{
            padding-top:0.05rem;
            padding-bottom: 0.19rem; 
        }
        .commodity-quantity{
            margin-top: 0.15rem;
            margin-right: 0.28rem;
        }
        .gray{
            padding: 0.15rem 0 0 0.28rem;
            display: inline-block;
            font-size: 0.16rem;
            color: $gray;
        }
        .commodity-price{
            color: $red;
            font-size: 0.16rem;
        }

    }

</style>
