<template>
    <section>
        <svg class="logo">
            <use xlink:href="#logo"></use>
        </svg>
        <star :len="5" :score="0" :val="1" ></star>        
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
import  '@/plugins/layer.js'

export default {
    name : 'test',
    components : {
        star
    },
    mounted () {
        console.log(new Layer());
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
    a{
        display: inline-block;
        font-size: 16px;
        margin: 10px;
    }
</style>
