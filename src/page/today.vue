<template>
    <section >
        <head-nav :title="title"></head-nav>
        <section class="today-container m-t ">
            <!-- 标题 -->
            <div class="h-1 m-r m-l">
                今日推荐
                <div class="today-avatar right">
                    <avatar size="s" imgSrc="static/avatar.jpg" @onAvatarTap="onAvatarTap"></avatar>
                </div>
            </div>
            <!-- 轮播 -->
            <div class="today-swiper m-t">
                <div class="h-2 m-l">明星单品</div>
                <swiper class="swiper-box"></swiper>
            </div>
            <!-- 商品列表 -->
            <div class="commodity-list">
                
                <div class="commodity-item m-l" @click="selectCommodity($event,item.commodityId)" v-for="item in commodityList" :key="item.commodityId">
                    <div class="commodity-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="h-2">{{item.commodityName}}</div>
                    <div class="commodity-price">¥{{item.commodityPrice}}</div>
                </div>

            </div>

        </section>
        <home-foot-bar></home-foot-bar>
    </section>
</template>

<script>
import headNav from './../components/header/headNav'
import homeFootBar from './../components/footer/homeFootBar'
import avatar from './../components/avatar/avatar'
import swiper from './../components/swiper/swiper'

export default {
    name: 'today',
    data(){
        return {
            title:'得乐商城',
            commodityList:[
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                 {
                    commodityId:'2',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                 {
                    commodityId:'3',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                 {
                    commodityId:'4',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                }
            ]
        }
    },
    components: {
        headNav,
        homeFootBar,
        avatar,
        swiper
    },
    methods: {
        onAvatarTap(e){
            console.log('点击头像',e.target);
            alert('点击头像');
        },
        selectCommodity($event,commodityId){
            console.log($event,commodityId);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/mixin.scss';

    .today-container {//用于填补homeFootBar的高度
        padding-bottom: 0.8rem;
    }

    .today-avatar,.swiper-box,.commodity-price {
       margin-top: 0.08rem;
    }

    .commodity-list {
        margin-top: 0.3rem;
        .commodity-item {
            display: inline-block;
            @include wh(1.43rem,1.9rem);
            .commodity-img {
                @include wh(1.4rem,1.4rem); 
                @include borderRadius();
                margin-bottom: 0.08rem;
            }
            .commodity-price {             
                @include font(0.12rem,$colE7290F);
            }
        }
    }
</style>
