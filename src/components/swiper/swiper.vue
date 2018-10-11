<template>
    <section class="swiper-template">

      <loading class="swiper-img-load" v-if="!imgReady"></loading>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide',{'hidden-slide':!imgReady}]" >
            <img  src="../../images/image1.png" alt="">
          </div>
          <div :class="['swiper-slide',{'hidden-slide':!imgReady}]" >
            <img  src="../../images/image2.jpg" alt="">
          </div>
          <div :class="['swiper-slide',{'hidden-slide':!imgReady}]" >
            <img  :src="defualtImg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>

  </section>
</template>

<script>
import '../../style/swiper-3.4.2.min.css'
import '../../plugins/swiper-3.4.2.min.js'
import defualtImg from './../../images/image3.png'
import loading from '@/components/loading/loading'

export default {
  name: 'swiper',
  data(){
    return {
      defualtImg: defualtImg,
      imgReady: false,
    }
  },
  mounted () {
      const that=this;
      new Swiper('.swiper-container',{
        autoplay: 5000,//自动播放
        pagination: '.swiper-pagination',// 如果需要分页器
        paginationClickable :true,//点击分页器换页        
        //nextButton: '.swiper-button-next',// 如果需要前进后退按钮
        //prevButton: '.swiper-button-prev',
        scrollbar: '.swiper-scrollbar',// 如果需要滚动条
        //direction: 'horizontal',//可设置水平(horizontal)或垂直(vertical)滑动
        //speed: '300' ,//滑动速度 默认：300ms
        autoHeight: true, //高度随内容变化
        freeMode : false, //惯性滑动且不会贴合
        effect : 'coverflow',//默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        onInit: function(swiper){
              //Swiper初始化了
        },
        onImagesReady: function(swiper){
          //swiper 图片太大 加载延迟 考虑先隐藏 加载好后再显示
          that.imgReady=true;        
        },
        
      });
  },
  components:{
    loading
  }
}
</script>

<style  lang="scss">
@import '../../style/mixin';

  .swiper-template {
    position: relative;
    .swiper-img-load{
      @include wh(0.24rem);
      @include absolute(50%,50%);
      margin-left:-0.12rem;
      margin-top:-0.12rem;
    }
  }

  .swiper-container {
    @include wh(3.2rem);
    min-height:1.7rem;
    @include borderRadius();
    overflow: hidden;
    .swiper-slide{
      @include wh(3.2rem);
      @include borderRadius();
      overflow: hidden;  
    }
    .hidden-slide{
      opacity: 0;
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
          background: #000;
        }
    }
  }

  .swiper-container-horizontal>.swiper-pagination-bullets{
      bottom:-8% !important;
  }

</style>
