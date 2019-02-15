<template>
    
    <section class="msg-bubble ellipsis" v-if="this.init!=false"  @click="tapBubble">
                {{val}}
    </section>

</template>

<script>
export default {
    name: 'msgBubble',
    props:['init'],
    data:function () {
        return {
            val:this.init||0,
        }
    },
    methods:{
        tapBubble($event){
            this.$emit("tapBubble",$event);
            console.log("tapBubble");
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";

    .msg-bubble{
            position: absolute;
            @include absolute(-10%,54%);
            height: 0.18rem;
            line-height: 0.18rem;
            min-width: 0.18rem;
            max-width: 0.4rem;
            overflow: hidden;
            @include borderRadius(0.2rem); 
            background: $red;
            color: $white;
            padding: 0 4%;
            font-size: 0.12rem;
    }



</style>
