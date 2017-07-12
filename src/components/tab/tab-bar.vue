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
                        to: {name:'myself'}
                    }
                ]
            }
        },
        watch: {
            '$route'(to, from) {
                let mainRouter = to.path,
                    reg = /\/([\w-]+)$/,
                    lastRouter = reg.exec(mainRouter)[1];
                /*
                *   此处为监控主界面 四个tab路由
                *   目的是由于左上角有需要跳转路由的地方，由于头部为公用组件，
                *   所以需要动态的检测返回时 返回到哪一个路由
                *   此处方法为监控到跳转前所在的路由 临时存储为在sessionStorage
                */
                if(sessionStorage.getItem('memory')){
                    let data = JSON.parse(sessionStorage.getItem('memory'))
                    data.memory = lastRouter
                    sessionStorage.setItem('memory',JSON.stringify(data))
                }else{
                    sessionStorage.setItem('memory',JSON.stringify({memory:lastRouter}))
                }
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
        height: 1.2rem;

        border-top: 1px solid #eee;
        background: #FCFCFC;

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
            color: #49C01B;
        }
    }
</style>
