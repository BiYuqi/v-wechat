<template>
    <div class="login">
        <h3>使用账号和密码登录</h3>
        <form>
            <div class="item-wrap">
                <div class="item">
                    <input type="text" placeholder="请输入账号" v-model="form.userName">
                </div>
            </div>
            <div class="item-wrap">
                <div class="item">
                    <input type="text" placeholder="请输入密码" v-model="form.userPass">
                </div>
            </div>
            <div class="item-wrap">
                <div class="item btn-sure" @click="login">
                    登录
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            pageIndex: 0,
            form:{
                userName:'',
                userPass:'',
                token:new Date().getTime()
            }
        }
    },
    methods: {
        ...mapActions(['USER_SIGNIN']),
        login () {
            if(!this.form.token || !this.form.userPass){
                return
            }
            console.log(this.form)
            this.USER_SIGNIN(this.form)
            this.$router.replace({
                name:"chat",
                query:{
                    mode:"fade"
                }
            })
        }
    },
    mounted() {
        console.log(this.$store.state.user)
    },
    components: {

    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/mixin';
    .login {
        @include abs(0,0,0,0);
        padding: 2.6rem 0;
        background: url('../../assets/img/bg.png') no-repeat;
        background-size: cover;
        form{
            width: 70%;
            margin: 0 auto;
        }
        h3{
            color: #fff;
            text-align: center;
        }
        .btn-sure{
            @include lh(.8rem);
            color: #fff;
            background-color: rgb(65, 172, 125);
            border-radius: .06rem;
            text-align: center;
        }
        .item-wrap {
            position: relative;
            max-width: 100%;
            height: .8rem;
            margin: .6rem 0;

            label{
                position: absolute;
                left: 0;
                top: 10px;
                height: 100%;
                color: #fff;
            }
            .item{
                width: 100%;
                height: 100%;
                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: 1px solid #eee;
                    padding-left: 10px;
                }
            }
        }
    }
</style>
