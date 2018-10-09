<template>
    <section >
        <head-nav :title="title"></head-nav>
        <section class="today-container m-t m-l">
            <!-- 标题 -->
            <div class="today-title h-1 m-r">
                今日推荐
                <div class="today-avatar right">
                    <avatar size="s" imgSrc="static/avatar.jpg" @onAvatarTap="onAvatarTap"></avatar>
                </div>
            </div>
            <!-- 轮播 -->
            <div class="today-swiper m-t">
                
                <div class="h-2">明星单品</div>


            </div>

        </section>
        <home-foot-bar></home-foot-bar>
    </section>
</template>
<script>
import headNav from './../components/header/headNav'
import homeFootBar from './../components/footer/homeFootBar'
import avatar from './../components/avatar/avatar'

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
        avatar
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
    .today-avatar{
       margin-top: 0.08rem;
    }
</style>
