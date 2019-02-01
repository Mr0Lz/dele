<template>
    
    <section class="layer">
        <div class="layer-mask" v-if="maskShow" @click="maskclick"></div>
        <slot name="layer-content"></slot>
    </section>

</template>

<script>
export default {
    name : 'layer',
    props: ['maskClose','initMask','initLayer'],
    data: function (){
        return {
            maskShow: this.initMask == undefined ? true : this.initMask,
        }
    },
    methods : {
        maskclick($event){
            this.$emit('maskclick',$event);
        }
    }
}
</script>

<style scoped lang="scss" >
    @import "../../style/mixin";

    .layer{
        position: fixed;
        top: 0;
        left: 0;
        @include wh(100%,100%);
        z-index: 3;
        .layer-mask{
            @include absolute(0,0);
            @include wh(100%,100%);
            background: $black;
            opacity: 0.5;
            z-index: -1;
        }
    }
</style>
