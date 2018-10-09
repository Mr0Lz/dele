<template>
    <section :class=" 'round avatar-'+size ">
        <img :src="imgSrc ? imgSrc : defaultImg " alt="">
    </section>
</template>
<script>

export default {
    name: 'avatar',
    data(){
        return {
            defaultImg:"static/avatar.jpg"
        }
    },
    props:{
        size:String,
        imgSrc:String
    }
}
</script>
<style lang="scss" scoped>
    @import "../../style/mixin";
    .round{
        @include borderRadius(50%);
        overflow: hidden;
        background: $colCCC;
        img {
            @include wh(100%,100%);
        }
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

