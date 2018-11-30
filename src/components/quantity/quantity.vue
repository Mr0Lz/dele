<template>

    <section class="quantity">
        <span ref="reduce" class="reduce"  @click="addAndReduce($event,-1)">-</span>
        <label><input type="number"  v-model.trim.number="value"></label>
        <span ref="add" class="add" @click="addAndReduce($event,1)">+</span>
    </section>

</template>

<script>
import {removeClass,addClass} from "@/config/mUtils";

export default {
    name :'quantity',
    props:[
        'initVal',
        'maxVal',
        'minVal'
    ],
    data(){
        return {
            val:this.initVal||this.minVal||0,
            max:this.maxVal||100,
            min:this.minVal||0
        }
    },
    computed:{
        value:{
            get(){
                let val=Number(this.val);
                this.$emit('changeVal',val);
                return val;
            },
            set(v){
                if(v<=this.min){
                    return  this.val=this.min;
                }

                if(v>=this.max){
                    return   this.val=this.max;
                }   
                
                return   this.val=v;
            }
        }
    },
    methods:{
        addAndReduce($event,type){
            this.value=Number(this.value)+type;
            let add=this.$refs.add;
            let reduce=this.$refs.reduce;            

          type==1 ? removeClass(reduce,'disabled') : removeClass(add,'disabled'); 

            if(this.value<=this.min){
                addClass(reduce,'disabled');
            }

            if(this.value>=this.max){
                addClass(add,'disabled');
            }    
            

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
        .reduce{
            border-bottom-left-radius: 0.04rem;
            border-top-left-radius: 0.04rem;
            border-right:0px; 
        }
        .add{
            border-bottom-right-radius: 0.04rem;
            border-top-right-radius: 0.04rem;
            border-left: 0px;
        }
        .disabled{
         border-color: $mediumGray;
         color: $mediumGray   
        }
    }

</style>
