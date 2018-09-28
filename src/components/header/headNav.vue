<template>
    <section class="head-nav">
        <a href="###">
        <svg t="1537519950016" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1044" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <path d="M351.080548 525.384887 743.262807 133.202628C759.532765 116.93267 759.951517 89.498954 743.289109 72.836547 727.114066 56.661504 699.599924 56.185954 682.923028 72.862849L260.597176 495.188701C260.592789 495.193088 260.588409 495.197469 260.584088 495.20191 260.579641 495.206236 260.575261 495.210617 260.57088 495.214997 252.487594 503.298283 248.325109 514.213393 248.264661 525.192566 248.183184 536.211472 252.244232 547.228128 260.57088 555.554776 260.575285 555.559181 260.57969 555.563586 260.584034 555.56793 260.588439 555.572335 260.592844 555.57674 260.597188 555.581084L682.923083 977.906979C699.19304 994.176936 726.626738 994.595598 743.289109 977.933227 759.464177 961.758159 759.939751 934.244089 743.262861 917.5672L351.080548 525.384887Z" p-id="1045" fill="#fff"></path>
        </svg>返回
        </a>
        <div class="head-title">
            {{title}}
        </div>
        <div class="other-btn">
            •••
        </div>
    </section>
</template>
<script>
export default {
    props:[],
    name: 'headNav',
    data(){
        return {
            title:"商城"
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin';

// .head-nav {
//     background: -webkit-gradient(linear,left top, left bottom,from(#2C2D31),to(#101013));background: -webkit-linear-gradient(#2C2D31,#101013);background: -o-linear-gradient(#2C2D31,#101013);background: linear-gradient(#2C2D31,#101013);
//     overflow: hidden;
//     a{
//         display: block;
//         @include wh(30%,0.44rem);
//         @include font(0.16rem,$colFFF,0.44rem);
//         float: left;                        
//     }
//     .icon{
//         width:0.26rem;
//         height:0.18rem;
//         vertical-align:sub;//对齐文本下标
//     }
// }
.head-nav {
    @include wh(100%,0.44rem);
    background: -webkit-gradient(linear,left top, left bottom,from(#2C2D31),to(#101013));background: -webkit-linear-gradient(#2C2D31,#101013);background: -o-linear-gradient(#2C2D31,#101013);background: linear-gradient(#2C2D31,#101013);
    @include flex();
    a{
        @include font(0.16rem,$colFFF,left,0.44rem);
    }
    .icon{
        width:0.26rem;
        height:0.18rem;
        vertical-align:sub;//对齐文本下标
    }
    .head-title{
        @include font(0.18rem,$colFFF,center,0.44rem);
    }
    .other-btn{
        @include font(0.18rem,$colFFF,right,0.44rem);
        padding-right: 0.2rem;
    }
    a,.head-title,.other-btn{
      -webkit-box-flex: 1;  -webkit-flex: 1;  -ms-flex: 1;  flex: 1; 
    }
}

</style>

