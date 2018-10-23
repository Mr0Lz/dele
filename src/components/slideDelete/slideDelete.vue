<template>
    
    <section class="slide-delete-template" @touchstart.stop="touchstart"  @touchmove.stop="touchmove"  @touchend.stop="touchend">
        <div :class=" ['slide-container']">
            <slot name="slide-container"></slot>
        </div><div :class=" ['remove-item']">删除</div>
    </section>

</template>

<script>
import { removeClass,addClass } from "@/config/mUtils"

export default {
    name:'slideDelete',
    data(){
        return {
            startX:null,
            endX:null,
            
        }
    },
    methods:{
        reposition(){
            let items=document.querySelectorAll(".slide-active");
            for(let i=0;i<items.length;i++){
                removeClass(items[i],"slide-active");
            }
        },
        touchstart(event){
           this.startX=event.touches[0].clientX;
           if(event.target.className.indexOf("remove-item")==-1){
               this.reposition();
           }
        },
        touchmove(event){
            this.endX=event.touches[0].clientX;
        },
        touchend(event){
            if(this.endX!==null){
                if(this.endX-this.startX>0&&Math.abs(this.endX-this.startX)>70){
                    console.log("左滑");
                }else if(this.endX-this.startX<0&&Math.abs(this.endX-this.startX)>70){
                    console.log("右滑");
                    let slide=event.currentTarget.children,item=slide[0],remove=slide[1];
                    addClass(remove,"slide-active");
                    addClass(item,"slide-active");
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

    .slide-delete-template{
        position: relative;
        overflow: hidden;
        .slide-container{
            transition: all 0.3s;
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
            transition: all 0.3s;
        }

        .slide-active.slide-container{
            transform: translateX(-30%) scale(1);
        }
        .slide-active.remove-item{
            opacity: 1;
            transform:scale(1);
        }
        
    }

</style>
