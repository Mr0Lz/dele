<template>

    <section class="personal page-container">
        <head-nav :goback="true" ></head-nav>

        <avatar class="m-t avatar avatar-l" ref="avatar" :imgSrc="imgSrc" ></avatar>

        <div class="modify-avatar">
            <label class="mediumGray" >
                <input type="file" accept="image/*" @change="changeAvatar($event)">
                更改头像            
            </label>
        </div>
        <section class="info-container m-l m-r">
            <div class="info-item"><span class="item-title mediumGray">昵称</span>
                <input type="text"/>
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">性别</span>
                <choose class="inline-block">
                    <input type="radio" name="sex" slot="input">
                    <span class="mediumGray" style="margin-left:0.04rem;">男</span>
                </choose>
                <choose class="inline-block" style="margin-left:0.5rem;">
                    <input type="radio" name="sex" slot="input">
                    <span class="mediumGray" style="margin-left:0.04rem;">女</span>
                </choose>
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">手机</span>
                <input  placeholder="无" v-model.number="telephone" type="number" >
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">生日</span>
                <input type="text" id="datePicker" @click="showDatePicker" placeholder="请选择">
            </div>
        </section>

    </section>

</template>

<script>
import headNav from '@/components/header/headNav'
import avatar from '@/components/avatar/avatar'
import choose from "@/components/choose/choose"
import { toPreviewer } from '@/config/mUtils'
import '@/style/picker.css'
import datePicker from '@/plugins/datePicker.min.js'

export default {
    name: 'personalInfo',
    data:function (){
        return {
            telephone:"",
            imgSrc:"static/mangguo.png"
        }
    },
    components:{
        headNav,
        avatar,
        choose,
    },
    methods:{
        changeAvatar($event){
            //改变图片
            //使用$refs.avatar 调用子组件
            //this.$refs.avatar.src="static/mangguo.png";  
            //修改props的imgSrc属性会报 "反模式错"  props只用于初始化
            let files=$event.target.files;
            let that=this;
            toPreviewer(files,0.7).then(function(dataURL){
                that.$refs.avatar.src=dataURL;
            }).catch(error => console.log(error));

        },
        showDatePicker($event){
                   var nowValue = document.getElementById('datePicker');
                new datePicker({
                    "type": "3",//0年, 1年月, 2月日, 3年月日
                    "title": '请选择日期',//标题(可选)
                    "maxYear": "",//最大年份（可选）
                    "minYear": "",//最小年份（可选）
                    "separator": "-",//分割符(可选)
                    "defaultValue": nowValue.value,//默认值（可选）
                    "callBack": function (val) {
                        //回调函数（val为选中的日期）
                        nowValue.value = val;
                    }
                });
        }
    }
}
</script>

<style scoped lang="scss">

    @import "../../style/mixin";
    @include hr();

    .personal{
        font-size: 0.16rem;
        input{
            font-size: 0.16rem;
        }
        .mediumGray{
            color: $mediumGray;
        }
        .modify-avatar{
            text-align: center;
            margin-top: 0.1rem;
            margin-bottom: 0.3rem;
            label{
                display: inline-block;
                width: 20%;
            }
        }
        .info-container{
            div{
                padding: 0.15rem 0;
            }
        }
        .avatar{
            margin-left: auto;
            margin-right: auto;
        }
        .info-item {
            .item-title{
                margin-right: 0.46rem;
            }
        }
    }


</style>
