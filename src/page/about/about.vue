<template>
    
    <section class="about page-container">
        <head-nav title="关于我们" :goback="true" ></head-nav>

        <section class="about-container">
            <svg class="logo">
                <use xlink:href="#logo"></use>
            </svg>
            <h1 class="h-1" style="text-align: center;">商城</h1>
            <div class="link-container m-t">
                
                <link-group :item="linkArr" ></link-group>

            </div>

        </section>

    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import linkGroup from '@/components/linkGroup/linkGroup'

export default {
    name : 'about',
    data(){
        return {
            linkArr:[{
                text: '服务协议',
                href: '/about/protocol'
            },{
                text: '绑定手机遇到问题',
                href: '/phone/help'
            }]
        }
    },
    components:{
        headNav,
        linkGroup
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin.scss';

    .about-container{
            .logo{
                display: block;
                margin: 0 auto;
                margin-top: 0.6rem;
                width: 1.3rem;
            }
    }

</style>
