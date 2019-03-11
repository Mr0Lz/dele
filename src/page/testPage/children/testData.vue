<template>

    <main class="testData">
        <head-nav title="资源,静态数据的展示"  :goback="true"></head-nav>
        <p>企业名称:{{companyConfig.name}}</p>
        <p>企业电话:{{companyConfig.telephone}}</p>
        <p>企业logo:
            <img class="logo" :src="companyConfig.logo">
            <svg class="logo">
                <use xlink:href="#logo"></use>
            </svg>
        </p>
        <p>网页可见区域宽：document.body.clientWidth{{clientWidth}}</p>
        <p>网页可见区域宽：document.body.offsetWidth (包括边线的宽){{offsetWidth}}</p>
        <p>屏幕分辨率的宽：window.screen.width{{width}}</p>
        <p>屏幕可用工作区宽度：window.screen.availWidth{{availWidth}}</p>
        <star :len="5" :score="0" :val="1" ></star>
        <drag-bubble :y="dragY"></drag-bubble>
        <loading style="width:0.6rem;"></loading>

    </main>

</template>

<script>
import headNav from '@/components/header/headNav'
//企业信息
import companyConfig from '@/config/companyConfig'
import dragBubble from '@/components/canvasAnimation/dragBubble'
import loading from '@/components/loading/loading'
import star from '@/components/star/star'

export default {
    name : 'testData',
        data : function (){
        return {
            dragY:0,
            clientWidth:document.body.clientWidth,
            offsetWidth:document.body.offsetWidth,
            width:window.screen.width,
            availWidth:window.screen.availWidth,
            companyConfig:companyConfig,
            showLayer:false,
            showShoppingCart:false,
            }
        },
    components : {
        star,
        loading,
        dragBubble,
        headNav
    }
}
</script>

<style scoped lang="scss">
    .testData{
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 202;
        background: #fff;
        p{
            font-size: 0.16rem;
            padding: 0.2rem;
        }
        img,.logo{
            width:0.4rem;
        }
    }
</style>
