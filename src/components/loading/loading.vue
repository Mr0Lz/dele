<template>
        <transition name="loading"  appear @after-enter="enter" @after-leave="afterLeave">
            <img :src="loadIcon" class="loading-rotate">  
      </transition>
</template>

<script>
import loadIcon from '@/images/loadIcon.svg'

export default {
    name: 'loading',
    data(){
        return {
            loadIcon
        }
    },
    methods: {
        enter(el){
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
    animation: loading-rotate 0.6s infinite 0.5s linear;
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

