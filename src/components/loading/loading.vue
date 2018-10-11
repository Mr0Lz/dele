<template>
        <transition name="loading"  appear @after-enter="afterEnter" @after-leave="afterLeave">
            <img :src="loadIcon"  :class=" { 'loading-rotate' : isRotate } ">  
      </transition>
</template>

<script>
import loadIcon from '@/images/loadIcon.svg'

export default {
    name: 'loading',
    data(){
        return {
            loadIcon,
            isRotate:false
        }
    },
    methods: {
        afterEnter(el){
            this.isRotate=true;
        },
        afterLeave(el){
        }
    }
}
</script>

<style lang="scss" scoped>

.loading-enter-active {
    animation: loading-in 0.5s;
}
.loading-leave-active {
    animation: loading-in 0.5s reverse;
}
.loading-rotate{
    animation: loading-rotate 0.5s infinite 0.5s linear;
}

@keyframes loading-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes  loading-rotate{
    100% {
        transform: rotate(360deg);
    }
}


</style>

