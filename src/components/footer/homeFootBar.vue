<template>
    <footer class="footer-bar">
        <slot name="totalPrice"></slot>
        <section class="home-bar">
            <section :class="$route.path.indexOf('today') !== -1 ? 'foot-active' : '' " @click="$router.push('/today')">
                <svg class="icon">
                    <use xlink:href="#today"></use>
                </svg>
                <span>今日</span>
            </section>
            <section :class="$route.path.indexOf('shoppingBag') !== -1 ? 'foot-active' : '' "  @click="$router.push('/shoppingBag')">
                <svg class="icon">
                    <use xlink:href="#bag"></use>
                </svg>
                <span>购物袋</span>
            </section>
            <section :class="$route.path.indexOf('personal') !== -1 ? 'foot-active' : '' "  @click="$router.push('/personal')">
                <msgBubble  max="999" min="1" init="1"  class="item-bubble"></msgBubble>
                <svg class="icon">
                    <use xlink:href="#person"></use>
                </svg>
                <span>我的得乐</span>
            </section>
        </section>
    </footer>
</template>
<script>
import msgBubble from '@/components/msgBubble/msgBubble'

export default {
    name:'homeFootBar',
    components:{
        msgBubble
    }
}
</script>
<style lang="scss" scoped>
@import "./../../style/mixin" ;

.footer-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1;
        background: $white;
        width: 100%;            
    .home-bar {
        border-top: 0.01rem solid $lightGray;
        @include flex(center,center);
        @include wh(100%,0.49rem);
        > section {
            position: relative;
            flex: 1;
            @include font(0.12rem,center);
            text-align: center;
            .icon {
                width: 0.22rem;
                height: 0.22rem;
                fill: $mediumGray;
            } 
            span{
                display: block;
                color: $mediumGray;           
            }
        }
        .foot-active{
                span,.icon {
                    fill:$black;
                    color: $black;
                }
            } 
    }
}

</style>
