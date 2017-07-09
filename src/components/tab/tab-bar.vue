<template id="">
    <footer class="tab-bar">
        <router-link class="wrap" v-for="(tab,index) in tabbar" :to="tab.to" :key="index">
            <i class="iconfont" :class="tab.icon"></i>
            <span>{{tab.title}}</span>
        </router-link>
    </footer>
</template>
<script>
    export default {
        name: 'tab-bar',
        data() {
            return {
                tabbar: [
                    {
                        title: '微信',
                        icon: 'icon-weixin',
                        to: {name: 'chat'}
                    },
                    {
                        title: '通讯录',
                        icon: 'icon-tongxunlu',
                        to: {name:'contact'}
                    },
                    {
                        title: '发现',
                        icon: 'icon-faxian',
                        to: {name:'discover'}
                    },
                    {
                        title: '我',
                        icon: 'icon-wo',
                        to: {name:'me'}
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tab-bar{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;

        border-top: 1px solid #eee;
        background: rgba(235, 235, 235, .95);

        z-index: 100;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;

        .wrap{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            i{
                font-size: .52rem;
            }
            span{
                font-size: .28rem;
            }
        }
        .router-link-active {
            // 选中颜色
            color: green;
        }
    }
</style>
