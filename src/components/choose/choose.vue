<template>

    <section class="choose">
        <label class="choose-label" >
            <slot name="input"></slot>
            <img :src="iconType" alt="">
            <img :src="actIconType" alt="">
            <slot></slot>
        </label>                        
    </section>

</template>

<script>
import select from "@/images/select.png"
import none from "@/images/none.png"
import remove_fill from "@/images/remove_fill.png"
import select_fill from "@/images/select_fill.png"
import remove from "@/images/remove.png"

export default {
    name: 'choose',
    props:[
        'icon',//none remove-fill remove select-fill select
        'actIcon',//none remove-fill remove select-fill select
    ],
    data(){
        return {
            iconType:this.icon || none,
            actIconType:this.actIcon || select
        }
    }
}
</script>

<style  lang="scss" scoped>
    @import '../../style/mixin';

    .choose{
            .choose-label input{
                opacity: 0;
            }
            .choose-label input + img,.choose-label input:checked + img ~ img{
                @include wh(0.18rem,0.18rem);
                vertical-align: sub;
                display: inline-block;
            }

            .choose-label input + img ~ img,.choose-label input:checked + img{
                display: none;
            }
    }
</style>
