<template>

    <section class="personal">
        <head-nav title="我的得乐"></head-nav>

        <section class="personal-container">

            <!-- 头像 -->
            <div class="personal-avatar">
                <avatar size="m" ></avatar>
                <div class="personal-info">
                    <strong class="personal-name">一个帅哥</strong>
                    <span class="personal-authorize"></span>
                </div>
                <router-link to="xxx" class="btn1">资料设置</router-link>
                <router-link to="xxx" class="btn2">资料设置</router-link>
                <router-link to="xxx" class="btn3">资料设置</router-link>
                <router-link to="xxx" class="btn4">资料设置</router-link>
                <router-link to="xxx" class="btn5">资料设置</router-link>
            </div>

        </section>

        <home-foot-bar></home-foot-bar>
    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import msgBubble from '@/components/msgBubble/msgBubble'
import avatar from '@/components/avatar/avatar'

export default {
    name: 'peronal',
    data(){
        return {
            msg:"1"
        }
    },
    components:{
        headNav,
        homeFootBar,
        msgBubble,
        avatar
    }
}

</script>


<style lang="scss" scoped>
    @import "../style/mixin";

    .btn1{
        @include btn($colFFF,$col7F7F7F,$border:0.01rem solid $col7F7F7F,$w:0.58rem,$h:0.22rem,$lh:0.22rem,$fsz:0.12rem,$r:0.04rem);
    }

    .btn2{
        @include btn();
    }

    .btn3{
            @include btn();
        }

    .btn4{
        @include btn();
    }

    .btn5{
        @include btn();
    }
</style>
