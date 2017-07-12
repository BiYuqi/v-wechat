<template>
    <header class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="title" :class="{vertivalLine}">
            <slot name="title"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<script>
export default {
    // 字体是否有竖线
    props:['vertivalLine'],
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixin.scss";

.nav-bar{
    @include abs(0,0,auto,0)
    height:1.2rem;
    padding: .4rem .24rem 0;
    color: #fff;
    background-color: #393a3f;
    z-index:100;
    font-size: .32rem;
    .title{
        @include abs(50%,auto,0,2rem);
        width: 20%;
        height: 1.2rem;
        line-height: 1.2rem;
        transform: translate(-50%,-50%);
        &.vertivalLine:after{
            content: '';
            display: block;
            width: 1px;
            height: .4rem;
            position: absolute;
            left: -0.2rem;
            top: 50%;
            transform: translateY(-50%);
            background: #1e1e1e;
        }
    }
    .left {
        @include abs(50%, auto,0,.24rem);
        transform: translateY(-50%);
        font-size: .2rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .right {
        @include abs(50%,.22rem,0,auto);
        height: 1.2rem;
        line-height: 1.2rem;
        transform: translateY(-50%);
    }
}

</style>
