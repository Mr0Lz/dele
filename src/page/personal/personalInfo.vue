<template>

    <section class="personal page-container">
        <head-nav title="个人资料" :goback="true" ></head-nav>

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
                <input v-if=" !isBindPhone "  placeholder="无" v-model.number="telephone" type="number" style="width:1.4rem;" >
                <span v-else style="display:inline-block;width:1.4rem;">15569336954</span>
                <router-link v-if=" !isBindPhone " class="mediumGray bind-btn" to="/phone/bind">绑定手机</router-link>
                <router-link v-else class="mediumGray bind-btn" to="/phone/change">更改手机</router-link>
            </div>
            <hr>
            <div class="info-item"><span class="item-title mediumGray">生日</span>
                <input type="text" id="datePicker" @click="showDatePicker" placeholder="请选择">
            </div>
        </section>

        <div class="submit-btn" @click="submit" >提交</div> 

        <!-- 绑定手机弹框内容 -->
        <div ref="bindLayer" style="display:none">
            <div style="background:red">
            bindLayer
            </div>
        </div>	

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
            imgSrc:"static/mangguo.png",
            isBindPhone:false
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
        },
        submit($event){
   
        }
    }
}
</script>

<style scoped lang="scss">

    @import "../../style/mixin";
    @include hr();

    .personal{
        font-size: 0.16rem;


        .submit-btn{
            margin: 0.3rem auto 0.3rem auto;
            @include btn($bgc:$blue,$c:$white,$border:0.01rem solid $blue,$w:3.18rem,$h:0.38rem,$lh:0.4rem,$fsz:0.16rem,$align:center,$r:0.06rem);
        }
        .bind-btn{
            padding-left: 0.1rem;
            border-left: 0.01rem solid $lightGray; 
        }
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
