<template>
    <section >
        <head-nav :title="title"></head-nav>
        <section class="today-container p-t p-l">
            <div class="today-title h-1 p-r">
                今日推荐
                <div class="avatar">
                </div>
            </div>
        </section>
        <home-foot-bar></home-foot-bar>
    </section>
</template>
<script>
import headNav from './../components/header/headNav'
import homeFootBar from './../components/footer/homeFootBar'

export default {
    name: 'today',
    data(){
        return {
            title:'得乐商城'
        }
    },
    components: {
        headNav,
        homeFootBar
    }
}
</script>
<style lang="scss" scoped>
    @import "../style/mixin";
</style>
