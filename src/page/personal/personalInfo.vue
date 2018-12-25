<template>

    <section class="personal page-container">
        <head-nav :goback="true" ></head-nav>
            <router-link to="/shoppingBag?invalid=1&flage=1">babb</router-link>
        <avatar class="m-t avatar avatar-l"></avatar>

        <div class="modify-avatar mediumGray">
            更改头像
        </div>

        <section class="info-container m-l m-r">
            <div class="info-item"><span class="item-title mediumGray">昵称</span>
                <input type="text"/>
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">性别</span>
                <choose class="inline-block">
                    <input type="radio" name="sex" slot="input">
                    <span class="mediumGray" style="margin-left:0.04rem;">男</span>
                </choose>
                <choose class="inline-block" style="margin-left:0.5rem;">
                    <input type="radio" name="sex" slot="input">
                    <span class="mediumGray" style="margin-left:0.04rem;">女</span>
                </choose>
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">手机</span>
                <input  placeholder="无" v-model.number="telephone" type="number" >
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">生日</span>
                <input type="date">
            </div>
        </section>

    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import avatar from '@/components/avatar/avatar'
import choose from "@/components/choose/choose"


export default {
    name: 'personalInfo',
    data:function (){
        return {
            telephone:"",
        }
    },
    components:{
        headNav,
        avatar,
        choose
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">

    @import "../../style/mixin";
    @include hr();

    .personal{
        font-size: 0.16rem;
        input{
            font-size: 0.16rem;
        }
        .mediumGray{
            color: $mediumGray;
        }
        .modify-avatar{
            text-align: center;
            margin-top: 0.1rem;
            margin-bottom: 0.3rem;
        }
        .info-container{
            div{
                padding: 0.15rem 0;
            }
        }
        .avatar{
            margin-left: auto;
            margin-right: auto;
        }
        .info-item {
            .item-title{
                margin-right: 0.46rem;
            }
        }
    }


</style>
