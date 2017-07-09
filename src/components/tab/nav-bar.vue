<template>
    <header class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<script>
export default {
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
        @include abs(0,.24rem,0,50%);
        width: 20%;
        transform: translateX(-50%);
    }
    .left {
        @include abs(auto, auto,0,.24rem);
        font-size: .2rem;
    }
    .right {
        @include abs(0.04rem,.24rem,0,auto);
    }
}

</style>
