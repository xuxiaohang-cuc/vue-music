<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    components:{
        BScroll
    },
    //props 用于数据传值
    props:{
        //监听滚动
        probeType:{
            type: Number,
            default:1
        },
        // 设置是否允许点击
        click:{
            type:Boolean,
            default:true
        },
        data:{
            type:Array,
            default:null
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
        },20)

        
    },
    //watch 当监听到数据变化 触发
    watch:{
        data(){
           setTimeout(()=>{
               this.refresh()
           },20)
        }
    },
    methods:{
        //初始化
        _initScroll(){
            if(this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType = this.probeType,
                click = this.click
            })
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        //data 变化 触发refresh
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style>

</style>