<template>
    
    <section class="slide-delete-template" @touchstart="touchstart" @touchend="touchend">
        <slot name="slide-container"></slot>
    </section>

</template>

<script>
export default {
    name:'slideDelete',
    data(){
        return {
            x:0
        }
    },
    methods:{
        touchstart($event){
            console.log('start');
        },
        touchend($event){
            console.log('end');
        }
    }
}
</script>

<style>

</style>
