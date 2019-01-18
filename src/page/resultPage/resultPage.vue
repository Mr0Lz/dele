<template>
    
    <section class="resultPage page-container">
        <head-nav :title="title"  :goback="true"></head-nav>
        <!-- 明天做成按参数配置 -->
        <div class="resultPage-container">
            <img :src="icon" alt="" class="icon">
            <p class="result-msg" v-if="msg">{{msg}}</p>
            <p class="result-details m-l m-t m-r" v-if="details">{{details}}</p>
            <div class="call-btn m-l m-t" v-if="callBackName&&btnText"  @click="callBack">{{btnText}}</div>
            <div class="go-back-btn m-l" @click="$router.push('/')" >返回商城首页</div>
        </div>

    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import iconSucced from '@/images/icon_succeed.png'

export default {
    name : 'resultPage',
    data(){
        return {
            icon:iconSucced,
            msg:'',
            title:'',
            callBackName:'',
            details:'',
            btnText:''
        }
    },
    mounted(){
        this.msg=this.$route.query.msg;
        this.title=this.$route.query.title;
        this.callBackName=this.$route.query.callBack;
        this.details=this.$route.query.details;
        this.btnText=this.$route.query.btnText;  
    },
    methods:{
        callBack(){
            switch(this.callBackName){
                case 'toPersonalInfo' : 
                case '订单详情' :
                case '评价成功' :
                case '售后' :
                    this[this.callBackName]();//执行对应的回调
                break;
            }
        },
        toPersonalInfo(){
            this.$router.push('/personalInfo');
        }
    },
    components:{
        headNav
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

    .resultPage-container{
        .result-msg{
            font-size: 0.2rem;
            text-align: center;
        }
        .result-details{
            font-size: 0.16rem;
            color: $gray;
            text-align: center;
        }
        .go-back-btn{
            margin-top: 0.15rem;
            @include  btn($bgc:$white,$c:$blue,$border:0.01rem solid $blue,$w:3.18rem,$h:0.38rem,$lh:0.4rem,$fsz:0.16rem,$align:center,$r:0.06rem)
        }
        .call-btn{
          @include  btn($bgc:$blue,$c:$white,$border:0.01rem solid $blue,$w:3.18rem,$h:0.38rem,$lh:0.4rem,$fsz:0.16rem,$align:center,$r:0.06rem)  
        }
        .icon{
            display: block;
            @include wh(0.92rem);
            margin: 0.64rem auto 0.32rem auto;
        }
    }

</style>
