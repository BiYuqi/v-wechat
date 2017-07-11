<template lang="html">
    <page class="user-about">
        <nav-bar slot="nav-bar" vertivalLine=true>
            <span slot="title">更改名字</span>
            <nav-back slot="left" @click.native="goback"></nav-back>
            <span slot="right" class="save" @click="saveName">保存</span>
        </nav-bar>
        <template slot="main">
            <div class="input">
                <div class="">
                    <input type="text" v-model="nickValue">
                </div>
                <span>好的名字可以让朋友更好的记住你哦</span>
            </div>
        </template>
    </page>
</template>

<script>
import Page from '@/components/tab/page'
import NavBar from '@/components/tab/nav-bar'
import NavBack from '@/components/tab/nav-back'
export default {
    data() {
        return {
            nickValue:''
        }
    },
    methods:{
        goback() {
            this.$router.replace({
                name:'me',
                query:{
                    mode:'pop'
                }
            })
        },
        saveName() {
            // 利用本地存储进行名字修改
            if(this.nickValue.length<=0){return}
            sessionStorage.setItem('UNAME',JSON.stringify(this.nickValue))
            this.goback()
        }
    },
    components: {
        Page,
        NavBar,
        NavBack
    }
}
</script>

<style lang="scss">
    @import "../../assets/mixin";
    .user-about {
        .header-img{
            display: none!important;
        }
        .save{
            background-color: green;
            padding: .1rem .2rem;
            border-radius: .04rem;
        }
        .main{
            text-align: center;
        }
        .input{
            width: 5rem;
            height: 1rem;
            margin: .5rem auto;
            text-align: left;
            input{
                outline: none;
                border: none;
                width: 96%;
                border-bottom: 1px solid green;
                height: .6rem;
                background:$bgColor;
                margin-bottom: .2rem;
            }
            span{
                font-size: .12rem;
            }
        }
    }
</style>
