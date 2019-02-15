<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
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

	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}

</style>
