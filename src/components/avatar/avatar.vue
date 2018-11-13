<template>
    <section :class=" 'round avatar-'+avatarSize " @click="onAvatarTap">
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
        size:String,
        imgSrc:String
    },
    computed:{
        avatarSize () {
            return this.size.trim();
        }
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
    .avatar-s{
        @include wh(0.3rem,0.3rem);
    }
    .avatar-m{
        @include wh(0.6rem,0.6rem);
    }
    .avatar-l{
        @include wh(1rem,1rem);
    }
</style>

