<template>
    <section class="phoneOperation page-container">
        <head-nav :title="pageTitle" :goback="true"></head-nav>
        <section class="phoneOperation-container">
            
            <p class="bind-prompt m-t" v-if=" topPrompt != '' ">{{topPrompt}}</p>
            <p class="h-1 m-l m-t" v-if=" title != '' " >{{title}}</p>
            
            <div class="input-container m-l m-r m-t">

                <div class="input-item">
                    <!-- <span class="item-title mediumGray">手机号码</span> -->
                    <input type="text" :placeholder="placeholder">
                </div>
                <hr>

                <div class="input-item">
                    <!-- <span class="item-title mediumGray">验证码</span> -->
                    <input type="text" placeholder="验证码" >
                    <span class="inp-btn mediumGray right" @click="sendVerificationCode">发送验证码</span>
                </div>
                <hr>

            </div>
            <p class="bind-notice mediumGray  m-l m-t" v-for=" (item,index) in bindNotice "  v-if=" index == 0 "  :key="index" >{{item}}</p>
            <p class="bind-notice mediumGray  m-l" v-else  :key="index" >{{item}}</p>
            <div class="bind-btn m-t m-l" v-if=" bindBtn != '' " @click="submitCall" >{{bindBtn}}</div>
            <div class="bind-help m-t" v-if=" bindHelp "  @click="$router.push({path:'/phone/help'})">遇到问题？</div>
        </section>

    </section>
</template>

<script>
import headNav from '@/components/header/headNav'
export default {
    name : 'phoneOperation',
    data (){
        return {
            pageTitle:'',
            title:'',
            topPrompt:'',
            bottomPrompt:'',
            bindBtn:'',
            bindNotice:[],
            bindHelp:false,
            placeholder:'',
        }
    } ,
    mounted(){
        let type=this.$route.params.type;
        switch (type){
            case 'bind' : 
                this.pageTitle='绑定手机';
                this.topPrompt='为确保账户安全，需绑定手机';
                this.bindBtn='提交';
                this.bindNotice=['* 请使用 +86 开头的手机号码'];
                this.placeholder='手机号码'
            break;
            case 'examine' : 
                this.pageTitle='更改手机号码';
                this.title='手机验证';
                this.bindBtn='下一步';
                this.bindNotice=['温馨提示:','1、如需更改绑定手机，需验证当前手机号码；','2、若当前号码已无法使用，请您联系客服。'];
                this.bindHelp=false;
                this.placeholder='手机号码';
            break;
            case 'change' : 
                this.pageTitle='绑定新手机号码';
                this.title='新的号码';
                this.bindBtn='提交';
                this.bindNotice=['* 请使用 +86 开头的手机号码'];
                this.bindHelp=true;
                this.placeholder='新的手机号码';
            break;
            default : this.$router.push({path:'/'}) ;//其他路径返回首页
            break;
        }
    },
    components : {
        headNav
    },
    methods : {
        sendVerificationCode ($event){
            console.log('发送成功');
        },
        submitCall($event){
            let type=this.$route.params.type;
            switch (type){
                        case 'bind' : 
                            console.log('绑定成功');
                        break;
                        case 'examine' : 
                            console.log('验证成功');
                        break;
                        case 'change' : 
                            console.log('更换成功');
                        break;

                    }
        }
    }
}
</script>

<style  scopde lang="scss">
     @import "../../style/mixin.scss";
     @include hr();

    .phoneOperation-container{
        .bind-prompt,.bind-help{
            font-size: 0.16rem;
            color: $gray;
            text-align: center;
        }
        .mediumGray{
            color : $mediumGray;
        }
        .input-container{
            font-size: 0.16rem;
            .input-item{
                padding: 0.15rem 0;
                .inp-btn{
                    border-left: 0.01rem solid  $mediumGray;
                    padding-left: 0.1rem;
                }
            }
        }
        .bind-notice{
            font-size: 0.12rem;
        }
        .bind-btn{
            @include btn($bgc:$blue,$c:$white,$border:0.01rem solid $blue,$w:3.18rem,$h:0.38rem,$lh:0.4rem,$fsz:0.16rem,$align:center,$r:0.06rem);
        }
    }
</style>
