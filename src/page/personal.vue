<template>

    <section class="personal">
        <head-nav title="我的得乐"></head-nav>

        <section class="personal-container">

            <!-- 头像和个人信息 -->
            <div class="personal-avatar clear">
                <avatar size="m" class="left m-l m-r"></avatar>
                <div class="personal-info left">
                    <p class="personal-name">Pro9ice</p>
                    <p class="personal-authorize">已绑定微信</p>
                </div>
                <router-link to="xxx" class="personal-setting right m-r">资料设置</router-link>
            </div>

            <!-- 我的订单  -->
            <div class="personal-order m-t-10">

            </div>

            <!-- 我的功能链接  -->
            <div class="personal-link m-t-10">
                <link-group text="111" href="/today" ></link-group>
            </div>
            
            <div class="personal-link m-t-10">
                <link-group text="111" href="/today" ></link-group>
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
import linkGroup from '@/components/linkGroup/linkGroup'

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
        avatar,
        linkGroup
    }
}

</script>


<style lang="scss" scoped>
    @import "../style/mixin";

    .personal{
        min-height: 6.67rem;
        background: $colF2;
        @include wh(100%,300px);
        .personal-avatar {
            background: $colFFF;
            padding: 0.2rem 0;
            .personal-info{
                @include font(0.2rem);
                .personal-name{
                    margin-top: 0.05rem;
                    margin-bottom: 0.05rem;
                }
                .personal-authorize{
                    @include font(0.12rem,$colCCC);
                }
            }
            .personal-setting{
                margin-top: 0.18rem;
                @include btn($bgc:$colFFF,$c:$col7F7F7F,$border:0.01rem solid $col7F7F7F,$w:0.6rem,$h:0.24rem,$lh:0.24rem,$fsz:0.12rem,$r:0.03rem);
            }
        }
        
        .personal-order{
            background: $colFFF;
            height: 1.37rem;
        }


    }

</style>
