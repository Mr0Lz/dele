<template>

    <div class="link-group clear">
        <router-link :class=" index==0 ? 'link-item' : 'link-item link-border' "  :to="value.href"  v-for="(value,index) in item" :key="index" >
            {{value.text}} 
            <span class="right">></span>
        </router-link>
        <slot name="order-manage"></slot>
    </div>

</template>

<script>
export default {
    name: 'linkGroup',
    props: {
        item:Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .link-group{
        padding-left: 0.28rem;
        width: 100%;
        @include font(0.16rem,$black);
        background: #fff;
        .link-item{
            display: block;
            @include wh(3.2rem,0.52rem);
            line-height: 0.52rem;
            span{
                color: $gray;
            }
        }
        .link-border{
            border-top:0.01rem $lightGray solid;
        }
    }

</style>
