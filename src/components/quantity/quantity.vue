<template>

    <section class="quantity">
        <span class="add">-</span>
        <label><input type="number"  :value="value"></label>
        <span class="reduce">+</span>
    </section>

</template>

<script>
export default {
    name :'quantity',
    props:[
        "initVal"
    ],
    data(){
        return {
            value:this.initVal||0
        }
    },
    methods:{
        add(){

        },
        reduce(){

        }

    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

    .quantity{
        span,input{
            width: 0.3rem;
           @include font(0.12rem,$gray,center);
        }
        span,label{
            display: block;
            float: left;
            padding:0.04rem; 
            border: 0.01rem solid $gray;
        }
        span{
            padding-left:0.14rem;
            padding-right:0.14rem;
        }
        .add{
            border-bottom-left-radius: 0.04rem;
            border-top-left-radius: 0.04rem;
            border-right:0px; 
        }
        .reduce{
            border-bottom-right-radius: 0.04rem;
            border-top-right-radius: 0.04rem;
            border-left: 0px;
        }
        .disabled{
         background: $mediumGray;
         color: $mediumGray   
        }
    }

</style>
