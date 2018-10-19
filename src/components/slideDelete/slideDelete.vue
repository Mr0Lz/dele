<template>
    
    <section class="slide-delete-template" @touchstart.stop="touchstart"  @touchmove="touchmove"  @touchend.stop="touchend">
        <slot name="slide-container"></slot>
        <div class="remove-item"><span>删除</span></div>
    </section>

</template>

<script>
export default {
    name:'slideDelete',
    data(){
        return {
            startX:0,
            endX:0
        }
    },
    methods:{
        touchstart(event){
           this.startX=event.touches[0].clientX;
        },
        touchmove(event){
           this.endX=event.touches[0].clientX;
        },
        touchend(event){
            console.log(this.startX,this.endX,event.target);
            this.startX=null;
            this.endX=null;
        }
    }
}
</script>

<style lang="scss">
    @import "../../style/mixin";

    .slide-delete-template{
        position: relative;
        overflow: hidden;
        .remove-item{
            @include absolute(0,100%);
            @include wh(30%,100%);
            background: $colE7290F;
            span{
                @include center();
                @include font(0.16rem,$c:$colFFF); 
            }
        }
    }

</style>
