<template>

    <div class="link-group-template clear">
        <router-link class="link-item" :to="linkHref">{{linkText}} <span class="right">></span></router-link>
        <router-link class="link-item link-boder" :to="linkHref">{{linkText}} <span class="right">></span></router-link>
    </div>

</template>

<script>
export default {
    name: 'linkGroup',
    props: {
        href:String,
        text:String
    },
    computed: {
        linkHref(){
            return this.href.trim()||"点击文本";
        },
        linkText(){
            return this.text.trim()||"/";
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .link-group-template{
        padding-left: 0.28rem;
        width: 100%;
        @include font(0.16rem,$col191919);
        background: #fff;
        .link-item{
            display: block;
            @include wh(3.2rem,0.52rem);
            line-height: 0.52rem;
        }
        .link-boder{
            border-top:0.01rem $colF2 solid; 
        }
    }

</style>
