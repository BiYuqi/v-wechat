<template>
    <page marginBottom="true">
        <nav-bar slot="nav-bar">
            <span slot="left" class="title_wx ">微信</span>
            <span slot="right" class="add-modal" @click="add" v-if="pageIndex < 2">+</span>
        </nav-bar>
        <template slot="main">
            <router-view></router-view>
        </template>
        <tab-bar slot="tab-bar"></tab-bar>
    </page>
</template>
<script>
import Page from '@/components/tab/page'
import NavBar from '@/components/tab/nav-bar'
import TabBar from '@/components/tab/tab-bar'
export default {
    data() {
        return {
            pageIndex: 0
        }
    },
    methods: {
        add() {
            this.$router.replace({
                name: 'add',
                query: {
                    mode: 'push'
                }
            })
        }
    },
    components: {
        Page,
        NavBar,
        TabBar
    }

}
</script>
<style lang="scss" scoped>
    .add-modal{
        font-size: .6rem;
    }
    .title_wx{
        font-size: .32rem;
        margin-top:.02rem;
        display: block;
        
    }
</style>
