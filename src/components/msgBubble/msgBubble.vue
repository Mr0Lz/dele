<template>
    
    <section class="msg-bubble">
            <div class="bubble-container ellipsis">
                1
            </div>
    </section>

</template>

<script>
export default {
    name: 'msgBubble'
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";

    .bubble-container{
        @include absolute(-10%,56%);
        @include wh(0.18rem,0.18rem);
        font-weight:100;
        @include font(0.12rem,$colFFF,center,$line-height:0.18rem);
        @include borderRadius(50%);
        background: $colE7290F;
        
    }

</style>
