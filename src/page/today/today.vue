<template>
    <section class="today">
        <head-nav :title="title"></head-nav>
        <section class="today-container m-t ">
            <!-- 标题 -->
            <div class="h-1 m-r m-l">
                今日推荐
                <div class="today-avatar right">
                    <avatar class="avatar-s" imgSrc="static/avatar.jpg" @onAvatarTap="onAvatarTap"></avatar>
                </div>
            </div>
            <!-- 轮播 -->
            <div class="today-swiper m-t">
                <div class="h-2 m-l">明星单品</div>
                <swiper :itemList="swiperList"  class="swiper-box"></swiper>
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
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import avatar from './../../components/avatar/avatar'
import swiper from './../../components/swiper/swiper'

export default {
    name: 'today',
    data(){
        return {
            title:'商城',
            imgBaseUrl:'',
            swiperList:[
                {
                    imgUrl:require('../../images/image1.png'),//引入在src目录下的静态文件需要import 或者 require  
                    toPath:'./productDetails?id=1'                                        
                },{
                    imgUrl:'https://lz-dele.netlify.com/static/img/image2.96618e2.jpg',//否则使用 直接使用静态服务器的路径
                    toPath:'./productDetails?id=2'  
                },
                {
                    toPath:'https://www.baidu.com',
                    thirdParty:true
                }//使用默认图片
            ],
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
            this.$router.push('./productDetails?id='+commodityId);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin.scss';

    .today{
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
                    @include font(0.12rem,$red);
                }
            }
        }
    }
</style>
