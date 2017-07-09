<template>
    <div class="login">
        <h3>使用账号和密码登录</h3>
        <form>
            <div class="item-wrap">
                <label for="">账号</label>
                <div class="item">
                    <input type="text" name="" value="">
                </div>
            </div>
            <div class="item-wrap">
                <label for="">密码</label>
                <div class="item">
                    <input type="text" name="" value="">
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Page from '@/components/tab/page'
import NavBar from '@/components/tab/nav-bar'
import NavBack from '@/components/tab/nav-back'
export default {
    data() {
        return {
            pageIndex: 0
        }
    },
    methods: {

    },
    components: {
        Page,
        NavBar,
        NavBack
    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/mixin';
    .login {
        @include abs(0,0,0,0);
        padding: 64px 0;
        background-color: rgb(231, 241, 242);
        form{
            width: 70%;
            margin: 0 auto;
        }
        .item-wrap {
            position: relative;
            max-width: 100%;
            padding-left: 40px;
            height: 40px;
            margin: 20px 0;

            label{
                position: absolute;
                left: 0;
                top: 10px;
                height: 100%;
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
