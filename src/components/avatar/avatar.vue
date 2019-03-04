<template>
    <section class="round" @click="onAvatarTap">
        <img  v-autofix  :src="src" alt="">
    </section>
</template>
<script>
import autofix from '@/directives/autofix'

export default {
    name: 'avatar',
    data(){
        return {
            src:this.imgSrc
        }
    },
    props:{
        imgSrc:{
            type: String,
            default: 'static/avatar.jpg'
        }
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

