<template lang="html">
    <page class="user-about">
        <nav-bar slot="nav-bar" vertivalLine=true>
            <span slot="title">个人信息</span>
            <nav-back slot="left" @click.native="goback"></nav-back>
        </nav-bar>
        <template slot="main">
            <tab-group>
                <tab-cell title="头像"
                          large = true>
                </tab-cell>
                <tab-cell title = "昵称"
                          :detail = "nickName"
                          @click.native = "changeName">
                </tab-cell>
                <tab-cell title="微信号"
                          detail = "biyuqi6138"
                          @click.native="myadress">
                </tab-cell>
                <tab-cell title="二维码名片"
                          detail = "...">
                </tab-cell>
            </tab-group>
            <tab-group>
                <tab-cell title="我的地址"
                          detail = "">
                </tab-cell>
            </tab-group>
        </template>
    </page>
</template>

<script>
import Page from '@/components/tab/page'
import NavBar from '@/components/tab/nav-bar'
import NavBack from '@/components/tab/nav-back'
import TabGroup from '@/components/tab/tab-group'
import TabCell from '@/components/tab/tab-cell'

// 修改当前路由状态
export default {
    data() {
        return {
            back:'',
            nickName:'LoadingMore'
        }
    },
    methods: {
        changeName() {
            this.$router.replace({
                name:'nickname',
                query:{
                    mode:"push"
                }
            })
        },
        goback() {
            this.$router.replace({
                name:'myself',
                query:{
                    mode:'pop'
                }
            })
        }
    },
    mounted() {
        // 利用本地存储进行名字修改
        const UNAME = JSON.parse(sessionStorage.getItem('UNAME'));
        if(UNAME){
            this.nickName = UNAME;
        }
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell
    }
}
</script>

<style lang="scss">
    .user-about {
        .header-img{
            display: none!important;
        }
    }
</style>
