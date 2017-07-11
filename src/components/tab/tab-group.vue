<template lang="html">
    <ul class="group">
        <slot></slot>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.group {
    border: 1px solid $lineColor;
    border-left: 0;
    border-right: 0;
    margin: 18px 0 8px;
    box-sizing: border-box;
}
</style>
