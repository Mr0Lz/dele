<template>
    <section>
        <router-link to="/phone/bind">绑定手机</router-link>
        <router-link to="/phone/change">更换手机</router-link>
        <router-link to="/phone/examine">验证手机</router-link>
        <router-link to="/shoppingBag?flage=1&invalid=1">购物车</router-link>
        <router-link to="/phone/help">绑定手机遇到问题</router-link>
    </section>
</template>

<script>
export default {
    name : 'test'
}
</script>

<style scoped>
    a{
        font-size: 16px;
    }
</style>
