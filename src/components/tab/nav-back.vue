<template>
    <a href="javascript:;" class="nav-back">
        <span>{{title || '返回'}}</span>
    </a>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return{

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.nav-back {
    display: block;
    color: #fff;
    font-size: .32rem;
    .icon-back {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
    }
}
</style>
