<template>
    <page class="add-friend">
        <nav-bar slot="nav-bar">
            <span slot="title">添加朋友</span>
            <nav-back slot="left" @click.native="$router.replace({name: backTo, query: {mode: 'pop'}})"></nav-back>
        </nav-bar>
        <template slot="main">
            <div class="test-add-friend">
                dsffd
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
            pageIndex: 0,
            backTo:'chat'
        }
    },
    methods: {

    },
    mounted() {
        // 利用本地存储进行名字修改
        // const lastRouter = JSON.parse(sessionStorage.getItem('lr'));
        // if(lastRouter){
        //     this.backTo = lastRouter.pop();
        // }
    },
    components: {
        Page,
        NavBar,
        NavBack
    }

}
</script>
<style lang="scss" scoped>
    .add-friend{
        height: 100%;
        background-color: rgb(185, 175, 101);
    }
    .test-add-friend{
        background-color: #c33;
        height: 100%;
    }
</style>
