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
            backTo:''
        }
    },
    methods: {

    },
    mounted() {
        // 利用本tab组件存储的状态路由 进行动态的修改返回路由
        const lastRouter = JSON.parse(sessionStorage.getItem('memory'));
        if(lastRouter){
            this.backTo = lastRouter.memory
        }else{
            this.backTo = 'chat'
        }

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
