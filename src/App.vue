<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/*引入common 全局样式  style 不能加scoped  不然会引用失败*/
@import './style/common';
</style>
