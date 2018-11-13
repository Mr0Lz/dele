<template>
    <header class="head-nav">
        
        <section v-if="goback" @click="$router.go(-1)"  class="left go-back" >
            <!-- 直接使用svg -->
        <svg t="1537519950016" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1044" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <path d="M351.080548 525.384887 743.262807 133.202628C759.532765 116.93267 759.951517 89.498954 743.289109 72.836547 727.114066 56.661504 699.599924 56.185954 682.923028 72.862849L260.597176 495.188701C260.592789 495.193088 260.588409 495.197469 260.584088 495.20191 260.579641 495.206236 260.575261 495.210617 260.57088 495.214997 252.487594 503.298283 248.325109 514.213393 248.264661 525.192566 248.183184 536.211472 252.244232 547.228128 260.57088 555.554776 260.575285 555.559181 260.57969 555.563586 260.584034 555.56793 260.588439 555.572335 260.592844 555.57674 260.597188 555.581084L682.923083 977.906979C699.19304 994.176936 726.626738 994.595598 743.289109 977.933227 759.464177 961.758159 759.939751 934.244089 743.262861 917.5672L351.080548 525.384887Z" p-id="1045" fill="#fff"></path>
        </svg>
        <span >返回</span>
        </section>

        <section class="head-title">
            <span>{{title}}</span>
        </section>
        <!-- <router-link class="other-btn" to="###">•••</router-link> -->
        <section class="other-btn">
            <head-more class="other-icon"></head-more>
        </section>
    </header>
</template>
<script>
import headMore from '../SVGIconComponents/header_more_svg'
export default {
    props:['title','goback'],
    name: 'headNav',
    components:{
        headMore
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin';

.head-nav {
    @include wh(100%,0.44rem);
    background: -webkit-gradient(linear,left top, left bottom,from(#2C2D31),to(#101013));background: -webkit-linear-gradient(#2C2D31,#101013);background: -o-linear-gradient(#2C2D31,#101013);background: linear-gradient(#2C2D31,#101013);
    @include font(0.18rem);
    .go-back{
        span{
            @include font(0.16rem,$white,left);
            letter-spacing: 0.02rem;     
        }
    }
    .icon{
        width:0.26rem;
        height:0.18rem;
        vertical-align: sub;
    }
    .head-title{
       @include wh(100%,0.44rem);
       line-height: 0.44rem;
       text-align: center;
        span{
            color: $white;
        }
    }
    .go-back{
        position: absolute;
        height: 0.44rem;
        line-height: 0.44rem;
    }
    .other-btn{
        position: absolute;
        top: 0;      
        right: 0.1rem;     
        .other-icon{
            width:0.22rem;
            height: 0.44rem;
        }

    }
}

</style>

