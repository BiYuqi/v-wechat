<template id="">
    <div class="profile">
        <tab-group>
            <tab-cell class="head"
                :title="user.nickName"
                :subtitle="'微信号:'+user.username"
                large = true
                disclosure = true
                @click.native="aboutMe">
                <div slot="iconfont">
                    <img :src="img.url" alt="">
                </div>
            </tab-cell>
        </tab-group>
        <tab-group>
            <tab-cell :title="icons[4].name"
                        disclosure = true>
                <div slot="iconfont">
                    <img :src="icons[4].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
        </tab-group>
        <tab-group>
            <tab-cell :title="icons[0].name"
                        disclosure = true>
                <div slot="iconfont">
                    <img :src="icons[0].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
            <tab-cell :title="icons[1].name"
                        disclosure = true>
                <div slot="iconfont">
                    <img :src="icons[1].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
            <tab-cell :title="icons[2].name"
                        disclosure = true>
                <div slot="iconfont">
                    <img :src="icons[2].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
            <tab-cell :title="icons[3].name"
                        disclosure = true
                        @click.native="smileshop">
                <div slot="iconfont">
                    <img :src="icons[3].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
        </tab-group>
        <tab-group>
            <tab-cell :title="icons[5].name"
                        disclosure = true>
                <div slot="iconfont">
                    <img :src="icons[5].icon" slot="imgs" alt="">
                </div>
            </tab-cell>
        </tab-group>
    </div>
</template>
<script>
    import TabGroup from '@/components/tab/tab-group'
    import TabCell from '@/components/tab/tab-cell'

    // icon
    import setting from '@/assets/icons/setting.svg'
    import card from '@/assets/icons/card-box.svg'
    import photo from '@/assets/icons/glarry.svg'
    import select from '@/assets/icons/select.svg'
    import smile from '@/assets/icons/smile.svg'
    import wallet from '@/assets/icons/wallet.svg'

    export default {
        data() {
            return {
                user:{
                    nickName:"LoadingMore",
                    username:"biyuqi6138"
                },
                img:{
                    url:'http://loadingmore.com/uploads/avatar.png'
                },
                icons:[
                    {
                        name:"收藏",
                        icon:select
                    },
                    {
                        name:"相册",
                        icon:photo
                    },
                    {
                        name:"卡包",
                        icon:card
                    },
                    {
                        name:"表情",
                        icon:smile
                    },
                    {
                        name:"钱包",
                        icon:wallet
                    },
                    {
                        name:"设置",
                        icon:setting
                    }
                ]
            }
        },
        mounted() {
            // 利用本地存储进行名字修改
            const UNAME = JSON.parse(sessionStorage.getItem('UNAME'));
            if(UNAME){
                this.user.nickName = UNAME;
            }
        },
        methods:{
            aboutMe() {
                this.$router.replace({
                    name:'me',
                    query:{
                        mode:"push"
                    }
                })
            },
            smileshop() {
                this.$router.replace({
                    name:'smileshop',
                    query:{
                        mode:'push'
                    }
                })
            }
        },
        components: {
            TabGroup,
            TabCell
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
