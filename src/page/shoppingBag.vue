<template>
    <section class="shoppingBag page-container">
        <head-nav title="购物袋" goback="ture"></head-nav>

        <section class="shoppingBag-container ">

            <div class="h-1 m-l m-r">购物袋</div>

            <div class="commodity-list m-t" v-if="commodityArr.length&&$route.query.flage==1"  ref="commodityList">


                <slide-delete class="commodity-item"  v-for=" (item,index) in commodityArr" :i="index"   :key="index"   @slideDelete="slideDelete" >
                    <div slot="slide-container"   class="m-l">
                        <choose class="choose-commodity"  >
                            <input type="checkbox" slot="input"  @click="chooseItem">
                        </choose>
                            <div class="commodity-container">
                                <router-link to="/">
                                <div  class="commodity-img left">
                                    <img  :src="item.imgUrl" alt="">
                                </div>
                                <ul class="left">
                                    <li class="h-2 commodity-name">{{item.commodityName}}</li>
                                    <li class="commodity-details">180g/盒; 五盒/套</li>
                                    <li class="commodity-price">¥57.00</li>
                                </ul>
                                </router-link>
                            </div>
                        <quantity @changeVal="changeVal"  maxVal="6" minVal="0" class="commodity-quantity" initVal="1"></quantity>
                    </div>                
                </slide-delete>

                <div class="m-l m-t-10 slide-tip">
                    * 左滑可删除当前商品
                </div>
            </div>
            <div v-else class="nothing">
                <svg class="icon">
                    <use xlink:href="#bag"></use>
                </svg>
                <p class="h-2 nothing-tip">袋子里什么都没有</p>
                <router-link class="nothing-link" to="/">
                        去逛逛
                </router-link>
            </div>
        </section>

        <section class="invalid-container" v-if="invalidArr.length&&$route.query.invalid==1">   
            <div class="invalid-list">
                <p class="h-2 m-l invalid-h">以下商品已失效：<span class="h-2 right m-r invalid-clear" @click="invalidClear">清空</span></p>

                <div class="invalid-item" v-for="(item , index) in invalidArr" :key="index">
                    <div  class="invalid-img left ">
                        <img  src="static/mangguo.png" alt="">
                    </div>
                    <ul class="left">
                        <li class="h-2 commodity-name">{{item.commodityName}}</li>
                        <li class="commodity-details">已售罄</li>
                    </ul>
                </div>
            </div>
            
        </section>



        <home-foot-bar>
            <div slot="totalPrice">
                <choose>
                    <input type="checkbox"  slot="input" @click="chooseAll">
                </choose>
            </div>
        </home-foot-bar>
    </section>
</template>

<script>
import headNav from '@/components/header/headNav'
import homeFootBar from '@/components/footer/homeFootBar'
import slideDelete from '@/components/slideDelete/slideDelete'
import choose from "@/components/choose/choose"
import quantity from "@/components/quantity/quantity"

export default {
    name: 'shoppingBag',
    data (){
        return {
            invalidArr:[ {
                    commodityId:'1',
                    commodityName:'芒果酸奶1',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00',
                    check:true
                },
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶1',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00',
                    check:true
                },
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶1',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00',
                    check:true
                }
                ],
            commodityArr:[
                {
                    commodityId:'1',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                {
                    commodityId:'2',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                {
                    commodityId:'3',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                },
                {
                    commodityId:'4',
                    commodityName:'芒果酸奶',
                    imgUrl:'static/mangguo.png',
                    commodityPrice:'12.00'
                }
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
        choose,
        quantity
    },
    methods:{
        chooseItem($event){
            console.log('单选');
        },
        chooseAll($event){
            console.log('全选');
        },
        slideDelete(slideItem,i){
           //this.$refs.commodityList.removeChild(slideItem);
           console.log(slideItem,i);
           this.commodityArr.splice(i,1);
           console.log(this.commodityArr);
        },
        changeVal(val){
            console.log(val);
        },
        invalidClear(){
            this.invalidArr=[];
        }
    }
}
</script>

<style lang="scss">
    @import '../style/mixin';

    .shoppingBag{
        .choose-commodity{
            height: 1.1rem;
            float: left;
        }
        .commodity-name{
            color: $black;
            padding-left: 0.15rem;
        }
        .commodity-img{
            @include wh(0.8rem,0.8rem);
            @include borderRadius();
            overflow: hidden;
        }
        li{
            padding-left: 0.15rem;
            color: $gray;
        }
        .commodity-details{
            padding-top:0.05rem;
            padding-bottom: 0.19rem; 
        }
        .shoppingBag-container{
            background: $white;
            padding-top:0.15rem;
            .commodity-list{
                .commodity-item{
                    font-size: 0.12rem;
                }
                .commodity-quantity{
                        position: absolute;
                        right: 0.27rem;
                        bottom: 0.15rem;
                }
                .commodity-container{
                    margin-left: 0.33rem;
                    padding: 0.15rem 0;
                    overflow: hidden;
                }
                .slide-tip{
                        font-size: 0.12rem;
                        color:$lightGray;
                        padding-bottom: 0.15rem;
                }
            }
            .nothing{
                padding-top: 0.62rem;
                padding-bottom:0.3rem;
                .nothing-tip{
                    text-align: center;
                    color: $mediumGray;
                    margin: 0.2rem 0;
                }
                .icon{
                    display: block;
                    margin: 0 auto;
                    @include wh(1rem,1rem);
                    fill: $lightGray;
                }
                .nothing-link{
                    margin: 0 auto;
                    @include btn($c:$mediumGray,$border:0.01rem solid $mediumGray,$w:0.6rem,

$h:0.24rem,$lh:0.24rem,$fsz:0.12rem,$align:center,$r:0.03rem);
                }
            }
        }
        .invalid-container{
            background: $lightGray;
            padding-top: 0.1rem;
            padding-bottom: 0.6rem;            
            .invalid-list{
                background: $white;
                font-size: 0.12rem;
                .invalid-h{
                    color: $gray;
                    padding: 0.15rem 0;
                }
                .invalid-clear{
                    color: $red;
                }
                .invalid-item{
                    width: 3.2rem;
                    margin: 0 auto;
                    padding: 0.15rem 0;
                    overflow: hidden;                    
                    border-top: 0.01rem solid $lightGray;
                    .invalid-img{
                        @include wh(0.6rem,0.6rem);
                        @include borderRadius();
                        overflow: hidden;
                    }
                }
            }

        }


    }
</style>