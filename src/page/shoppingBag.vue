<template>
    <section class="shoppingBag page-container">
        <head-nav title="购物袋"></head-nav>

        <section class="shoppingBag-container ">

            <div class="h-1 m-l m-r">购物袋</div>

            <div class="commodity-list m-t">

                <slide-delete class="commodity-item">
                    <div slot="slide-container" class="m-l">
                        asda
                    </div>
                </slide-delete>
                <slide-delete class="commodity-item">
                    <div slot="slide-container" class="m-l">
                        asda
                    </div>
                </slide-delete>
            </div>

        </section>

        <home-foot-bar></home-foot-bar>
    </section>
</template>

<script>
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import slideDelete from '@/components/slideDelete/slideDelete'

export default {
    name: 'shoppingBag',
    components:{
        headNav,
        homeFootBar,
        slideDelete
    }
}
</script>

<style lang="scss">
    @import '../style/mixin';

    .shoppingBag{
        background: $colF2;
        .shoppingBag-container{
            background: $colFFF;
            padding-top:0.3rem; 
            .commodity-list{
                .commodity-item{
                    height: 1rem;
                    background: $col3791FA;
                    font-size: 0.12rem;
                }
            }
        }
    }
</style>
