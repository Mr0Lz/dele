<template>
    <section class="round" @click="onAvatarTap">
        <img :src="imgSrc ? imgSrc : defaultImg " alt="">
    </section>
</template>
<script>

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
    }
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

