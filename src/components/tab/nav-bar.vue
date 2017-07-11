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
    height:1rem;
    padding: .4rem .24rem 0;
    color: #fff;
    line-height: 1rem;
    background-color: #393a3f;
    z-index:100;
    .title{
        @include abs(0,.24rem,0,25%);
        width: 20%;
        transform: translateX(-50%);
        padding-left: .21rem;
        &.vertivalLine:after{
            content: '';
            display: block;
            width: 1px;
            height: .4rem;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: #1e1e1e;
        }
    }
    .left {
        @include abs(auto, auto,0,.24rem);
        font-size: .2rem;
        height: 100%;
    }
    .right {
        @include abs(auto,.24rem,0,auto);
    }
}

</style>
