<template>
    
    <section class="productDetails page-container">
        <head-nav goback="ture" :title="title"></head-nav>

        <div>
            <img src="/static/img/image3.ec43961.png" alt="">
        </div>
        <div>
            <img  src="static/mangguo.png" alt="">
        </div>

        <footer class="footer">
            <div class="left footer-l" @click="$router.push('./shoppingBag')">
                <svg class="icon">
                    <use xlink:href="#bag"></use>
                </svg>
                <span>购物袋</span>
            </div>

            <div class="right footer-btn" v-if="soldOut" @click="showQuantity">
                加入购物袋
            </div>
            <div class="right footer-btn sold-out" v-else>
                已售罄  
            </div>

        </footer>
    </section>

</template>

<script>
import headNav from '@/components/header/headNav'

export default {
    name: 'productDetails',
    data: function (){
        return {
            title: '商品详情',
            soldOut: true
        }
    },
    mounted(){
        console.log(this.$route.query);
    },
    components:{
        headNav
    },
    methods:{
        showQuantity:function(){}
    }
}
</script>

<style scoped lang="scss">
    @import "../../style/mixin.scss";

    .productDetails{


    
        .footer{
            position:fixed;
            bottom: 0;
            left: 0;
            @include wh(100%);
            
            .footer-l{
                @include wh(1rem,0.5rem);
                font-size: 0.12rem;
                text-align: center;
                border: 0.01rem solid  $lightGray;   
                padding-top: 0.04rem;                   
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
            .footer-btn{
                  @include btn($bgc:$red,$c:$white,$border:0.01rem solid $red,$w:2.73rem,$h:0.48rem,$lh:0.5rem,$fsz:0.16rem,$align:center,$r:0);
            }
            .sold-out{
                background-color: $mediumGray;
                color:$white;
                border:0.01rem solid $mediumGray;
            }
        }
    }
</style>