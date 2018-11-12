<template>

    <section class="choose">
        <div class="choose-choose-box left">
            <label class="choose-label" >
                <input :name="name" class="choose-input" :type="inputType" @click="chooseItem">
                <img class="choose-icon" :src="iconType" alt="">
                <img class="choose-act-icon" :src="actType" alt="">
            </label>                        
        </div>
    </section>

</template>

<script>
import selet from "@/images/selet.png"
import none from "@/images/none.png"

export default {
    name: 'choose',
    props:[
        'type',//radio checkbox
        'icon',//none remove-fill remove selet-fill selet
        'actIcon',//none remove-fill remove selet-fill selet
        'inputName'
    ],
    data(){
        return {
            iconType: this.icon || none,
            inputType: this.type || "checkbox",
            actType: this.actIcon || selet,
            name: this.inputName
        }
    },
    methods:{
        chooseItem ($event){
            this.$emit('chooseItem',$event);
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
            .choose-icon,.choose-act-icon{
                display: block;
                position: absolute;
                @include wh(0.18rem,0.18rem);
                top: 0;
                left: 0;
                z-index: -1;
            }
            .choose-act-icon{
                display: none;
            }
            .choose-label{
                display: block;
                @include wh(0.18rem,0.18rem);
            }

            .choose-input{
                display:none
            }

            .choose-input:checked + .choose-icon  {
                display: none;
            }
            //uc 对  .choose-input:checked + .choose-icon + .choose-act-icon 不生效
            .choose-input:checked + .choose-icon ~ .choose-act-icon {
                display: block; 
            }

        }

    }
</style>
