<template>

    <section class="choose">
        <label class="choose-label" >
            <slot name="input"></slot>
            <img class="choose-icon" :src="iconType" alt="">
            <img class="choose-act-icon" :src="actType" alt="">
            <slot></slot>
        </label>                        
    </section>

</template>

<script>
import selet from "@/images/selet.png"
import none from "@/images/none.png"

export default {
    name: 'choose',
    props:[
        'icon',//none remove-fill remove selet-fill selet
        'actIcon',//none remove-fill remove selet-fill selet
    ],
    data(){
        return {
            iconType: this.icon || none,
            actType: this.actIcon || selet,
        }
    }
}
</script>

<style  lang="scss" scoped>
    @import '../../style/mixin';

    .choose{
        .choose-icon,.choose-act-icon{
            display: block;
            @include wh(0.18rem,0.18rem);
            @include ct();
        }
        .choose-act-icon{
            display: none;
        }
        .choose-label{
            position: relative;         
            display: block;
        }

        .choose-label input{
            display:none
        }

        .choose-label input:checked + .choose-icon  {
            display: none;
        }
        //uc 对  .choose-input:checked + .choose-icon + .choose-act-icon 不生效
        .choose-label input:checked + .choose-icon ~ .choose-act-icon {
            display: block; 
        }

    }
</style>
