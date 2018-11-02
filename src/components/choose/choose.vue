<template>

    <section class="choose">
        <div class="choose-choose-box left">
            <label class="choose-label">
                <input :name="name" class="choose-input" :type="inputType">
                <img class="choose-icon" src="../../images/none.png" alt="">
                <img class="choose-act-icon" src="../../images/selet.png" alt="">
            </label>                        
        </div>
        <slot name="choose-container"></slot>
    </section>

</template>

<script>
import selet from "@/images/selet.png"
import none from "@/images/none.png"

export default {
    name: 'choose',
    props:{
        type:String,//radio checkbox
        icon:String,//none remove-fill remove selet-fill selet
        actIcon:String,//none remove-fill remove selet-fill selet
        inputName:String
    },
    data(){
        return {
            iconType: this.icon || none,
            inputType: this.type || "checkbox",
            actType: this.actIcon || selet,
            name: this.inputName
        }
    }
}
</script>

<style  lang="scss" scoped>
    @import '../../style/mixin';

    .choose{
        .choose-choose-box{
            position: relative;
            top: 50%;
            margin-top: -0.06rem;
            .choose-act-icon{
                opacity: 0;
            }
            .choose-label{
                display: block;
                @include wh(0.18rem,0.18rem);
            }
            .choose-icon,.choose-act-icon{
                display: inline-block;
                position: absolute;
                @include wh(0.18rem,0.18rem);
                top: 0;
                left: 0;
                z-index: -1;
            }
            .choose-input{
                display:none
            }

            .choose-input:checked + img  {
                opacity: 0;
            }
            .choose-input:checked + img + img {
                opacity: 1;
            }

        }

    }
</style>
