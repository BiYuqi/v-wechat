<template lang="html">
    <page class="smile-shop">
        <nav-bar slot="nav-bar">
            <span slot="title">表情商店</span>
            <nav-back slot="left" @click.native="goback"></nav-back>
        </nav-bar>
        <template slot="main">
            <ul class="tab-header">
                <li v-for="(list,index) in lists" :key="list.id"
                    :class="{active:selected==index}"
                    @click="change(index)">
                    {{list}}
                </li>
            </ul>
            <component :is="currentView"></component>
        </template>
    </page>
</template>

<script>
import Page from '@/components/tab/page'
import NavBar from '@/components/tab/nav-bar'
import NavBack from '@/components/tab/nav-back'

import Children0 from '@/components/me/smile-shop-children'
import Children1 from '@/components/me/smile-shop-children2'
export default {
    data() {
        return {
            selected:0,
            currentView:'Children0',
            lists:['精选表情','更多表情']
        }
    },
    methods:{
        goback() {
            this.$router.replace({
                name:'myself',
                query:{
                    mode:'pop'
                }
            })
        },
        change(index){
            this.selected = index
            this.currentView = 'Children'+index
        }
    },
    components:{
        Page,
        NavBack,
        NavBar,
        Children0,
        Children1
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/mixin";

.main{
    .tab-header{
        height: .7rem;
        line-height: .7rem;
        @include flex(space-around);
        background-color: #fff;
        li{
            width: 50%;
            text-align: center;
            position: relative;
            &.active{
                color: $baseColor;
            }
            &.active:after{
                display: block;
                content: '';
                @include abs(auto,auto,-0.04rem,0);
                height: .04rem;
                width: 100%;
                border-bottom: .04rem solid $baseColor;
            }
        }

    }
}
</style>
