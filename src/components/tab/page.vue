<template>
    <div class="page">
        <slot name="nav-bar"></slot>
        <section class="main" :class="insert">
            <slot name="main"></slot>
        </section>
        <slot name="tab-bar"></slot>
    </div>
</template>
<script>
    export default {
        props: ['marginBottom'],
        data() {
            return {
                insert: {
                    'margin-bottom':this.marginBottom
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/mixin';
    .page{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .main{
            height: 100%;
            box-sizing: border-box;
            padding-top: 1.2rem;
            overflow-y: scroll;
            background: $bgColor;

            &.margin-bottom {
                padding-bottom: 1.18rem;
            }
        }
    }
</style>
