<template>
    <section class="shoppingBag page-container">
        <head-nav title="购物袋" goback="ture"></head-nav>

        <section class="shoppingBag-container ">

            <div class="h-1 m-l m-r">购物袋</div>

            <div class="commodity-list m-t">

                <slide-delete @removeCommodity="removeCommodity" class="commodity-item" v-for=" (item,index) in commodityArr"  :i="index"  :key="index">
                    <div slot="slide-container"   class="m-l">
                        <choose class="choose-commodity" inputName="choose"  type="checkbox" ></choose>
                            <div class="commodity-container" @click="al">
                                <router-link to="/">
                                <img  class="commodity-img left" :src="item.imgUrl" alt="">
                                <ul class="left">
                                    <li class="h-2 commodity-name">{{item.commodityName}}</li>
                                    <li class="commodity-details">180g/盒; 五盒/套</li>
                                    <li class="commodity-price">¥57.00</li>
                                </ul>
                                </router-link>
                            </div>
                    </div>
                </slide-delete>


            </div>
        </section>

        <home-foot-bar></home-foot-bar>
    </section>
</template>

<script>
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import slideDelete from '@/components/slideDelete/slideDelete'
import choose from "@/components/choose/choose"


export default {
    name: 'shoppingBag',
    data (){
        return {
            commodityArr:[
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
            ]
        }
    },
    mounted(){
        let that=this;
        let xmlhttp=new XMLHttpRequest();
            xmlhttp.onreadystatechange=function()
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                that.commodityArr.push({text:xmlhttp.responseText});
            }
        }
        //xmlhttp.open("GET","http://dele-server-dele-server.1d35.starter-us-east-1.openshiftapps.com/pagecount",true);
        //xmlhttp.open("GET","http://127.0.0.1:8080/pagecount",true);
        //xmlhttp.send();
    },
    components:{
        headNav,
        homeFootBar,
        slideDelete,
        choose
    },
    methods:{
        al(){
            alert(2);
        },
        removeCommodity(container,slide,index){
            console.log(container,slide,index);
            this.commodityArr.splice(index,1);
        }
    }
}
</script>

<style lang="scss">
    @import '../style/mixin';

    .shoppingBag{
 
        .shoppingBag-container{
            background: $colFFF;
            padding-top:0.15rem;
            .commodity-list{
                .commodity-item{
                    font-size: 0.12rem;
                }
                .choose-commodity{
                    height: 1.1rem;
                    float: left;
                }
                .commodity-container{
                    margin-left: 0.33rem;
                    padding: 0.15rem 0;
                    overflow: hidden;
                    .commodity-name{
                        color: $col191919;
                        padding-left: 0.15rem;
                    }
                    .commodity-img{
                        @include wh(0.8rem,0.8rem);
                    }
                    li{
                        padding-left: 0.15rem;
                        color: $col7F7F7F;
                    }
                    .commodity-details{
                        padding-top:0.05rem;
                        padding-bottom: 0.19rem; 
                    }
                }
            }
        }
    }
</style>
