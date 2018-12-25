<template>
    <section class="round" @click="onAvatarTap">
        <img  v-autofix  :src="imgSrc ? imgSrc : defaultImg " alt="">
    </section>
</template>
<script>
import autofix from '@/directives/autofix'

export default {
    name: 'avatar',
    data(){
        return {
            defaultImg:'static/avatar.jpg'
        }
    },
    props:{
        imgSrc:String
    },
    methods: {
        onAvatarTap($event){
            this.$emit('onAvatarTap',$event);
        }
    },
    directives:{ //局部注册vue自定义指令
        autofix
    },
}
</script>
<style lang="scss" scoped>
    @import "../../style/mixin";
    .round{
        @include borderRadius(50%);
        overflow: hidden;
        background: $mediumGray;
    }

</style>

