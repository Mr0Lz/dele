<template>
    <section>
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
                    <div class="cart-btn" @click="closeCar">确定</div>
                </div>
            </layer>
        </transition>       
        <star :len="5" :score="0" :val="1" ></star>        
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
    </section>
</template>

<script>
import star from '@/components/star/star'
import layer from '@/components/layer/layer'
import '@/plugins/layer_mobile/need/layer.css'
import layerMobile from '@/plugins/layer_mobile/layer.js'

export default {
    name : 'test',
    data : function (){
        return {
            showLayer:false,
            showShoppingCart:false,
        }
    },
    components : {
        star,
        layer
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
            console.log(content.className+=' cart-content-out');
            this.showShoppingCart = false;
        },
        addShoppingCart(){
            this.showShoppingCart = true;
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../style/mixin.scss';
    .logo{
        display: block;
        width: 1rem;
        margin: 0 auto;
    }
    a,span{
        display: inline-block;
        font-size: 16px;
        margin: 10px;
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
        @include wh(100%,50%);
        background: $white;       
        font-size: 0.16rem;
        .cart-btn{
            position: absolute;
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
        animation: zoomInUp 0.8s;
    }
    .cart-content-out{
        animation: zoomOutDown 0.8s;
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
</style>
