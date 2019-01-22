<template>
    
    <section class="star">
        <div v-for=" ( item,index ) in starArr " :key="index" @click="selectStar(index,$event)">
            <img :src=" item.act ? active : normal"  alt="">         
        </div>
    </section>

</template>

<script>
import mojs from 'mo-js';
import normalStar from '@/images/normal_star.png' 
import activeStar from '@/images/active_star.png'
export default {
    name : 'star',
    props:{'len':Number,'score':Number,'val':Number},//len总共几颗星星,score当前分数(已经获取几颗,不可以再更改星星数量),val每颗星代表多少分
    data(){
        return {
            normal:normalStar,
            active:activeStar,
            value:this.val || 1,
            starArr:[]
        }
    },
    mounted(){

            for(let i = 0 ; i<this.len ; i++){
                if( this.score && this.score > 0 && this.score > i ){
                    this.starArr.push({index:i,val:this.value,act:true});
                    continue;
                }
                this.starArr.push({index:i,val:this.value,act:false});     
            }
    },
    methods : {
        selectStar:function (index,$event){
                new mojs.Burst({
                    parent:$event.target.parentNode,
                    radius:   { 15 : 45 },
                    count:    14,
                    duration: 1000,
                    onComplete () {
                        console.log( 'mojs completed' );
                    },
                    children: {
                        // property map - maps over children with mod function
                        shape: [ 'circle', 'polygon' ],
                        // property map - maps over children with mod function
                        fill:  [ '#333', 'magenta', 'purple' ],
                        angle: { 0: 360 },
                        // rand string - generates random value for every child rand( min, max )
                        degreeShift: 'rand(-360, 360)',
                        // stagger string( start, step ) for every child
                        delay: 'stagger(0, 10)',
                    }
                }).play();

            if( this.score && this.score > 0){//不修改星星
                this.$emit('selectStar',this.getScore());
                return false;
            }
            //修改星星
            if(!this.starArr[index].act){//添加星星
                for(let i =0 ; i<index+1 ; i++){
                    this.starArr[i].act=true;
                }
            }else{//减少星星
                for(let j = index+1 ; j<this.starArr.length ; j++){
                    this.starArr[j].act=false;
                }
            }        
            this.$emit('selectStar',this.getScore());            
        },
        getScore(){
            let score = 0;
            for(let i = 0 ; i<this.starArr.length; i++){
                if(this.starArr[i].act){
                    score += this.starArr[i].val;      
                }
            }
            return score;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin.scss';
    .star{
        div{
            position: relative;
            float: left;
            margin-left: 0.1rem;
            @include wh(0.22rem,0.22rem);
        }
    }
</style>
