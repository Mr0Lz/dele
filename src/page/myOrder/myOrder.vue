<template>

    <section class="myOrder page-container">
        <head-nav title="我的得乐" :goback="true" ></head-nav>

        <section class="top-nav-container">
            <div id="topNav" class="swiper-container" @touchstart.stop="navTouchstart"  @touchmove.stop="navTouchmove">
                <div class="swiper-wrapper">
                    <div class="swiper-slide active" hashnav="1">全部</div>
                    <div class="swiper-slide" hashnav="2">待付款</div>
                    <div class="swiper-slide" hashnav="3">待发货</div>
                    <div class="swiper-slide" hashnav="4">待收货</div>
                    <div class="swiper-slide" hashnav="5">待评价</div>
                    <div class="swiper-slide" >娱乐</div>
                    <div class="swiper-slide">科技</div>
                    <div class="swiper-slide">问答</div>
                    <div class="swiper-slide">汽车</div>
                    <div class="swiper-slide">财经</div>
                    <div class="swiper-slide">军事</div>
                    <div class="swiper-slide">体育</div>
                    <div class="swiper-slide">段子</div>
                    <div class="swiper-slide">美女</div>
                    <div class="swiper-slide">国际</div>
                    <div class="swiper-slide">趣图</div>
                    <div class="swiper-slide">健康</div>
                    <div class="swiper-slide">特产</div>
                    <div class="swiper-slide">房产</div>
                </div>
            </div>
            <span class="line"></span>
        </section>


        <!-- 内容块 -->
        <section class="page-swiper-container m-t-10">
            <loading class="swiper-page-load" v-if="isReady"></loading>

            <div  id="pageContainer" class="swiper-container ">
                <div class="swiper-wrapper">
                    <div :class="['swiper-slide']" hashcontent="1">11
                    </div>
                    <div :class="['swiper-slide']" hashcontent="2">22
                    </div>
                    <div :class="['swiper-slide']" hashcontent="3">33
                    </div>
                    <div :class="['swiper-slide']" hashcontent="4">44
                    </div>
                    <div :class="['swiper-slide']" hashcontent="5">55
                    </div>
                </div>
            </div>
        </section>
    </section>

</template>

<script>
import '../../style/swiper-3.4.2.min.css'
import '../../plugins/swiper-3.4.2.min.js'
import loading from '@/components/loading/loading'
import { addClass , removeClass , elStyle } from '@/config/mUtils.js'
import headNav from '@/components/header/headNav'


export default {
  name: 'myOrder',
  data(){
    return {
      isReady: false,
      pageContainerSwiper:null,
      topNavSwiper:null,
      line:null,
      lineInitL:0
    }
  },
  mounted () {
    //初始化swiper页面
    const that=this; 
    that.line=document.querySelector('.line');              
    that.pageContainerSwiper = new Swiper('#pageContainer',{
        autoHeight: true, //高度随内容变化
        freeMode : false, //惯性滑动且不会贴合
        observer:true,//当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents:true,//当Swiper的父元素变化时，例如window.resize，Swiper更新
        iOSEdgeSwipeDetection : true,//设置为true开启IOS的UIWebView环境下的边缘探测。如果拖动是从屏幕边缘开始则不触发swiper。
        noSwiping : true,//可以在slide上（或其他元素）增加类名'swiper-no-swiping'，使该slide无法拖动
        onSlideChangeStart: function(swiper){
            that.lineInitL=0;
            that.CenterAlignment(that.topNavSwiper,swiper.activeIndex,{lineMove:true});
        },
    });


    that.topNavSwiper = new Swiper('#topNav', {
        slidesPerView: 'auto',
        observer:true,//当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents:true,//当Swiper的父元素变化时，例如window.resize，Swiper更新
        onInit: function(swiper){
                //Swiper初始化了
            that.line.style.width=elStyle(swiper.slides[0]).width//下滑线 初始化长度
        },
    });
    
    //初始化 页面设置偏移    
    that.topNavSwiper.once('ReachBeginning',function(swiper){
        let active = document.querySelector('#topNav  .active');
       swiper.once('SetTranslate',function(s){
            that.CenterAlignment(s,active,{type:'tran',wrapper:s.wrapper[0],
                fn:function(swiper,slide,tranL){
                    that.lineInitL=tranL;
                }
            });
       });

    });

    that.topNavSwiper.on('tap', function(swiper, event) {
        that.lineInitL=0;
        that.CenterAlignment(swiper,swiper.clickedIndex,{lineMove:true});
        that.pageContainerSwiper.slideTo(swiper.clickedIndex);//联动   
    });

    that.topNavSwiper.on('TransitionEnd', function(swiper, event) {
        that.swiperTouchRecover(that.topNavSwiper);
    });

    that.setNav();

    that.pageContainerSwiper.on('TouchMove',function(swiper, event){
        let diff = Math.abs(swiper.touches.diff) > 10 ? ( swiper.touches.diff > 0 ? 10 : -10 )  : swiper.touches.diff;
        let active = document.querySelector('#topNav  .active');
        let activeL = active.offsetLeft;
        that.line.style.transform='translateX('+(Number(activeL)+diff+that.topNavSwiper.translate+that.lineInitL)+'px)';//下滑线左右滑动
    }); 
    that.pageContainerSwiper.on('TouchEnd',function(swiper, event){
        let active = document.querySelector('#topNav  .active');
        let activeL = active.offsetLeft;
        that.line.style.transform='translateX('+(Number(activeL)+that.topNavSwiper.translate+that.lineInitL)+'px)';//下滑线回弹复原
    }); 

  },
  components:{
    loading,
    headNav
  },
  methods:{
      CenterAlignment(swiper,index,opt){
        opt=opt||{};
        let swiperWidth = swiper.container[0].clientWidth,tranL,
        maxTranslate = swiper.maxTranslate(),
        maxWidth = -maxTranslate + swiperWidth / 2;
        let slide = (Number(index).toString() != 'NaN') ? swiper.slides[index] : index,
        slideLeft = slide.offsetLeft,
        slideWidth = slide.clientWidth,
        wrapper=opt.wrapper,
        slideCenter = slideLeft + slideWidth / 2;
        if(opt.type!='tran'){
            swiper.setWrapperTransition(300);
        }
        if (slideCenter < swiperWidth / 2) {
            if(opt.type!='tran'){
                swiper.setWrapperTranslate(0);
            }else{
                wrapper.style.transform='translate3d('+0+'px, 0px, 0px)';
                tranL=0;
            }

        } else if (slideCenter > maxWidth) {
            if(opt.type!='tran'){
                swiper.setWrapperTranslate(maxTranslate);
            }else{
                wrapper.style.transform='translate3d('+maxTranslate+'px, 0px, 0px)';
                tranL=maxTranslate; 
            }

        } else {
            let nowTlanslate = slideCenter - swiperWidth / 2;
            if(opt.type!='tran'){
                swiper.setWrapperTranslate(-nowTlanslate);
            }else{
                wrapper.style.transform='translate3d('+(-nowTlanslate)+'px, 0px, 0px)';
                tranL=(-nowTlanslate);
            }
        }

        if(opt.lineMove){
            let line=document.querySelector('.line'),active = document.querySelector('#topNav  .active');
            removeClass(active,'active');
            addClass(slide,'active');
            this.line.style.width=elStyle(slide).width//下滑线 改变长度
            //改变line的偏移,得加上swiper.translate居中后的距离
            this.line.style.transform='translateX('+(slide.offsetLeft+swiper.translate)+'px)';
        }


        if(opt.fn) opt.fn(swiper,slide,tranL);
    },
    setNav(){
        let hashnav=this.$route.query.hashnav,that=this,wrapper,
            navTab=document.querySelector('[hashnav="'+hashnav+'"]');
            if(!hashnav&&!navTab){
                return false;
            }
        let contentArr=document.querySelectorAll('[hashcontent]');
        for(let i=0; i<contentArr.length ;i++){
            if(contentArr[i].getAttribute('hashcontent')==hashnav){
                that.pageContainerSwiper.slideTo(i);//会触发 ReachBeginning事件
                break;
            }
        }
    },
    swiperTouchRecover(topNavSwiper,tranL){
        let active = document.querySelector('#topNav  .active');
        let activeL = active.offsetLeft;
        tranL = tranL || 0;
        this.line.style.transform='translateX('+(Number(activeL)+topNavSwiper.translate+tranL)+'px)';//下滑线回弹复原
    },
    navTouchstart($event) {
        $event.preventDefault();
    },
    navTouchmove($event) {
        let that=this,topNavSwiper=that.topNavSwiper;
        if(Math.abs(topNavSwiper.touches.diff)<10){
            return ;
        }
        let diff = Math.abs(topNavSwiper.touches.diff) > 10 ? ( topNavSwiper.touches.diff > 0 ? 10 : -10 )  : topNavSwiper.touches.diff;
        let active = document.querySelector('#topNav  .active');
        let activeL = active.offsetLeft;
        that.line.style.transform='translateX('+(Number(activeL)+diff+topNavSwiper.translate)+'px)';//下滑线左右滑动
    }
  }
}
</script>

<style  lang="scss" scoped>
@import '../../style/mixin';

.myOrder { 
    background: $lightGray;
    .top-nav-container{
        background: $white;
        position: relative;
        .line{
            transition:all 0.3s ease;
            position: absolute;
            display: block;
            left: 0.15rem;
            bottom: 0;
            height: 0.04rem;
            background: $black;
        }
    }

    #topNav {
        width: 100%;
        overflow: hidden;
        font-size: 0.16rem;
        .swiper-slide {
            box-sizing: content-box;/*设置这个元素的width 就不包含 border padding margin*/
            width: auto;
            padding: 0.15rem;
            white-space: nowrap;
        }
        .swiper-slide {
            color: $mediumGray;
        }
        .active {
            color:$black;
        }

    }

    .page-swiper-container{
        position: relative;

        .swiper-page-load{
        @include wh(0.24rem);
        @include absolute(50%,50%);
        margin-left:-0.12rem;
        margin-top:-0.12rem;
        }
    
        .swiper-container {
            background: $white;
        }
    }
}


</style>

