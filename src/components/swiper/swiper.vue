<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="static/image1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/image2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/image3.png" alt="">
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
</template>

<script>
import '../../style/swiper-3.4.2.min.css'
import '../../plugins/swiper-3.4.2.min.js'

export default {
  name: 'swiper',
  mounted () {
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
      });
  }
}
</script>

<style  lang="scss">
@import '../../style/mixin';

.swiper-container {
  @include wh(3.2rem);
  min-height:1.7rem;
  .swiper-slide{
    @include wh(3.2rem);
    @include borderRadius();
    overflow: hidden;  
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
