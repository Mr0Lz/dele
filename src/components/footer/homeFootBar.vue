<template>
    <footer class="foot-bar">
        <section :class="$route.path.indexOf('today') !== -1 ? 'foot-active' : '' " @click="goPath('/today')">
            <svg class="icon">
                <use xlink:href="#today"></use>
            </svg>
            <span>今日</span>
        </section>
        <section :class="$route.path.indexOf('order') !== -1 ? 'foot-active' : '' "  @click="goPath('/order')">
            <svg class="icon">
                <use xlink:href="#bag"></use>
            </svg>
            <span>购物袋</span>
        </section>
        <section :class="$route.path.indexOf('personal') !== -1 ? 'foot-active' : '' "  @click="goPath('/personal')">
            <svg class="icon">
                <use xlink:href="#person"></use>
            </svg>
            <span>我的得乐</span>
        </section>
    </footer>
</template>
<script>
export default {
    name:'homeFootBar',
    methods:{
        goPath(path){
            this.$router.push(path);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "./../../style/mixin" ;

.foot-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: $colFFF;
    @include flex(center,center);
    @include wh(100%,0.49rem);
    > section {
        flex: 1;
        height: 0.49rem;
        border-top: 0.01rem solid $colF2;
        @include flex(center,center);
        -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column;    
        .icon {
            width: 0.22rem;
            height: 0.22rem;
            fill: $colCCC;
        } 
        span{
            @include font(0.12rem,$colCCC);            
        }
    }
    .foot-active{
            span,.icon {
                fill:$col191919;
                color: $col191919;
            }
        } 
}

</style>
