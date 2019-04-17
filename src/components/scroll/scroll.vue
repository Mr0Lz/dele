<template>
    
    <section class="wrapper m-t-10" ref="wrapper" >
        <div class="content"  ref="content">
            <ul >
                <!-- 下次开始编写scroll控件 -->
                <li @click="a">...asd</li>
                <li><a href="/">...asd</a></li>
                <li><router-link to="/">...asd </router-link></li>
                <li @touchstart="a">...asd</li>
                <li>...asd</li>
                <li>...asd</li>
                <li>...asd</li>
                <li>...asd</li>
            </ul>
        </div>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </section>

</template>

<script>
import BScroll from 'better-scroll';

//滑动方向
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
    name : 'scroll',
    props:{
        width:{
            type: Number
        },
        height:{
            type: Number
        }
    },
    mounted(){
        this.$refs.wrapper.style.overflow = 'hidden';
        this.$refs.wrapper.style.width = this.width ? this.width+'px' : document.body.clientWidth + 'px' ;
        this.$refs.wrapper.style.height = this.height ? this.height+'px' : document.body.clientHeight + 'px' ;

        this.scroll = new BScroll(this.$refs.wrapper,{
                                        click: true,
                                        pullDownRefresh: {
                                                threshold: 50,
                                                stop: 20
                                            }
                                        });
    },
    methods : {
        a(){
            alert();
        }
    }
}

</script>

<style  lang="scss" scoped>
@import '../../style/mixin';

    .wrapper{
        //font-size: 0.16rem;
        li{
            margin-bottom: 0.1rem;
            background: $white;
        }
    }
</style>
