<template>

    <section>
        <head-nav :goback="true" ></head-nav>

        <avatar class="m-t avatar avatar-l"></avatar>
        <div v-test>asd</div>
    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import avatar from '@/components/avatar/avatar'
import test from '@/directives/test'

export default {
    name: 'personalInfo',
    components:{
        headNav,
        avatar
    },
    directives:{ //局部注册vue自定义指令
        test
    }
}
</script>

<style>

</style>
