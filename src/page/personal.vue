<template>

    <section class="personal">
        <head-nav title="我的得乐"></head-nav>

        <section class="personal-container">
            
        </section>

        <home-foot-bar></home-foot-bar>
    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import msgBubble from '@/components/msgBubble/msgBubble'

export default {
    name: 'peronal',
    data(){
        return {
            msg:"1"
        }
    },
    components:{
        headNav,
        homeFootBar,
        msgBubble
    }
}

</script>


<style lang="scss" scoped>
    @import "../style/mixin";
</style>
