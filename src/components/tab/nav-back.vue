<template>
    <a href="javascript:;" class="nav-back">
        <img :src="backs" alt="">
    </a>
</template>

<script>
import back from '@/assets/icons/back.svg'
export default {
    data() {
        return{
            backs:back
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin.scss';
.nav-back {
    display: block;
    color: #fff;
    font-size: .32rem;
    position: relative;
    height: 1rem;
    padding-top: .16rem;
    .icon-back {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
    }
    img{
        width: .6rem;
    }
}
</style>
