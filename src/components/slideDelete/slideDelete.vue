<template>
    
    <section class="slide-delete" >
        <div ref="container" :class=" ['slide-container']"  @touchstart.stop="touchstart"  @touchmove.stop="touchmove"  @touchend.stop="touchend">
            <slot name="slide-container"></slot>
        </div>
        <div ref="remove" :class=" ['remove-item']" @click="remove" >删除</div>
    </section>

</template>

<script>
import { removeClass,addClass } from "@/config/mUtils"

export default {
    name:'slideDelete',
    props:{
        i:Number
    },
    data(){
        return {
            startX:null,
            endX:null,
            index:this.i,
            flage:false
        }
    },
    methods:{
        remove($event){
           let slide = $event.currentTarget.parentNode;
           let container = slide.parentNode;
        //    container.removeChild(slide);
           this.$emit("removeCommodity",container,slide,this.index);
        },
        reposition(){
            let items=document.querySelectorAll(".slide-active");
            for(let i=0;i<items.length;i++){
                removeClass(items[i],"slide-active");
            }
            this.flage=false;
        },
        touchstart($event){
           this.startX=$event.touches[0].clientX;
           if(this.flage){
               $event.preventDefault();
                if($event.target.className.indexOf("remove-item")==-1){
                    this.reposition();
                }
           }
            
        },
        touchmove($event){
            this.endX=$event.touches[0].clientX;
        },
        touchend($event){
            if(this.endX!==null){
                if(this.endX-this.startX>0&&Math.abs(this.endX-this.startX)>50){
                    console.log("左滑");
                }else if(this.endX-this.startX<0&&Math.abs(this.endX-this.startX)>50){
                    console.log("右滑");
                    addClass(this.$refs.remove,"slide-active");
                    addClass(this.$refs.container,"slide-active");

                    this.flage=true;

                }
            }
            
            this.startX=null;
            this.endX=null;
        },
    }
}
</script>

<style lang="scss">
    @import "../../style/mixin";

    .slide-delete{
        position: relative;
        overflow: hidden;
        .slide-container{
            position: relative;
            z-index: 1;
            background-color:$colFFF;
            height: 100%;
        }   
        .remove-item{
            @include flex(center,center);
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            @include wh(30%,100%);
            background: $colE7290F;
            z-index: 0;
            @include font(0.16rem,$c:$colFFF);
            transform: scale(0.8); 
        }
        .slide-container,.remove-item{
            transition: transform 0.3s;
            backface-visibility: hidden;//去除文字过渡引起抖动
            -webkit-font-smoothing: subpixel-antialiased;//去除文字过渡引起模糊
        }

        .slide-active.slide-container{
            //transform: translate3D(-30%,0,0) scale(1);
            transform: translateX(-30%) scale(1);
        }
        .slide-active.remove-item{
            opacity: 1;
            transform:scale(1);
        }
        
    }

</style>
