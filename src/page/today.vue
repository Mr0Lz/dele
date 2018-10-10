<template>
    <section >
        <head-nav :title="title"></head-nav>
        <section class="today-container m-t ">
            <!-- 标题 -->
            <div class="today-title h-1 m-r m-l">
                今日推荐
                <div class="today-avatar right">
                    <avatar size="s" imgSrc="static/avatar.jpg" @onAvatarTap="onAvatarTap"></avatar>
                </div>
            </div>
            <!-- 轮播 -->
            <div class="today-swiper m-t">

                <div class="h-2 m-l">明星单品</div>

                <div class="swiper-box">
                    <swiper></swiper>
                </div>

            </div>
            <!-- 商品列表 -->
            <div class="commodity-list">
                
                <div class="commodity-item">
                    <img src="static/image2.jpg" alt="">
                    <div class="commodity-name">芒果酸奶</div>
                    <div class="commodity-price">¥12.00</div>
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
            title:'得乐商城'
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .today-avatar,.swiper-box{
       margin-top: 0.08rem;
    }
    .commodity-list{
        margin-top: 0.3rem;
    }
</style>
