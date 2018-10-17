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
                <router-link  to="xxx" class="personal-setting right m-r">资料设置</router-link>
            </div>

            <!-- 我的订单  -->
            <div class="personal-order m-t-10" >
                <link-group :item="personalOrder" >
                    <div class="orde-manage" slot="order-manage">
                        <router-link class="manage-item" :to="item.href" :key="index" v-for="(item ,index) in orderManage" >
                        <img :src="item.icon" alt="">
                            {{item.text}}
                        </router-link>
                    </div>
                </link-group>
            </div>

            <!-- 我的功能链接  -->
            <div class="personal-link m-t-10" v-for=" (item,index) in linkGroupArr" :key="index">
                <link-group :item="item" ></link-group>
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
import payment from '@/images/order_pending_payment.png'
import delivery from '@/images/order_pending_delivery.png'
import receive from '@/images/order_pending_receive.png'
import comment from '@/images/order_pending_comment.png'

export default {
    name: 'peronal',
    data(){
        return {
            linkGroupArr:[
                [{
                    text: '地址管理',
                    href: '/'
                 },{
                    text: '企业订购',
                    href: '/'
                   }
                ],[{
                    text: '联系客服',
                    href: '/'
                 },{
                    text: '关于得乐',
                    href: '/'
                   }
                   ]
            ],
            personalOrder:[{
                text: '我的订单',
                href: '/'
            }],
            orderManage: [
              {
                text: '待付款',
                href: '/',
                icon: payment
            },
             {
                text: '待发货',
                href: '/',
                icon: delivery
            },
             {
                text: '待收货',
                href: '/',
                icon: receive
            },
             {
                text: '待评价',
                href: '/',
                icon: comment
            }
            ]
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
            .orde-manage{
                border-top:0.01rem $colF2 solid;
                width: 3.2rem;
                padding: 0.14rem 0;                
                @include flex(center,center);
                .manage-item{
                    display: block;
                    flex: 1;
                    @include font(0.12rem,$col7F7F7F,center);
                    img{
                        margin:0 auto 0.05rem auto;
                        @include wh(0.32rem,0.32rem);
                    }
                }
            }
        }


    }

</style>
