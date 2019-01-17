<template>
    
    <section class="bindHelp page-container">
        <head-nav title="绑定手机遇到问题" :goback="true"></head-nav>

        <section class="phoneOperation-container">
            <p class="h-2 m-l m-t">无法接收短信验证码</p>
            <div class="help-info  m-l m-r">
                <p>1、系统发送短息时，可能会有所延迟，请耐心稍候片刻。</p>
                <p>2、请检查手机是否处于正常使用的状态，如：停机、欠费、开启飞行模式的状态下，无法正常接收短信验证码。</p> 
                <p>3、如当前的手机信号不佳，也可能会导致短信接收失败。</p> 
                <p>4、获取短信验证码次数过于频繁，也可能会导致无法接收验证码，（一个手机号每天最多只可获取 5 次验证码）。</p> 
                <p>5、请检查手机是否拦截了系统短信，或者安装了有短信拦截功能的手机应用，您可以在关闭拦截功能后再次尝试获取验证码。</p> 
                <p>6、如过您曾经投诉过垃圾短信（或回复过“退订”之类），那您当前的运营商可能会过滤您的手机号码，从而导致无法正常接收短信验证码。</p> 
                <p>7、请确认该号码为您当前所使用的手机号码。</p>
            </div>
            <p class="h-2 m-l m-t">提示「该手机号码已被注册」</p>
            <div class="help-info  m-l m-r">
                <p>1、请确认该号码为您当前所使用的手机号码。 </p>
                <p>2、更换一个手机号码后，再进行绑定操作。</p>
            </div>
            <div class="help-service m-l m-t">如上述方法均无法解决，请您与我们联系：<a  href="tel:888888888" >联系客服</a></div>
        </section>

    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
export default {
    name: 'bindHelp',
    components:{
        headNav
    }
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin.scss";

    .phoneOperation-container{
        .help-info p{
            font-size: 0.12rem;
            color: $mediumGray;
            margin-top: 0.15rem;
        }
        .help-service{
            font-size: 0.12rem;
            a{color:$blue;}
        }
    }

</style>
