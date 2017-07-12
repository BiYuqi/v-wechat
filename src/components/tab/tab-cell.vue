<template lang="html">
    <li class="tab-cell" :class="{large,contact}">
        <div class="header-img">
            <slot name="iconfont" class="maybe">
                <slot name="imgs"><img :src="img" alt=""></slot>
            </slot>
        </div>
        <section class="con" :class="{subtitle,detail,center}">
            <span class="title">{{title}}</span>
            <span class="subtitle" v-if="subtitle || detail">{{subtitle || detail}}</span>
            <slot name="photo"></slot>
        </section>
        <div class="more" v-if="more || disclosure">
            <div class="button" v-if="more">
                <slot name="button"></slot>
            </div>
            <div class="disclosure" v-if="disclosure"></div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['large','contact','title','subtitle',
            'detail','center','more','disclosure','img'],

}
</script>

<style lang="scss" scoped>
    @import '../../assets/mixin';

    .tab-cell{
        position: relative;
        height: 1.2rem;
        background-color: #fff;
        padding: 0 12px;
        @include flex(flex-start);

        .header-img{
            img{
                width: .52rem;
                height: .52rem;
            },
            .maybe{
                width: .52rem;
                height: .52rem;
            }
            i{
                font-size: .44rem;
                color: #65D020;
            }
        }

        .con{
            width: 100%;
            line-height: 1.8;
            margin: auto .36rem;
            font-size: .32rem;
            font-weight: 600;
            @include flex(flex-start);

            &.subtitle {
                @include flex(space-around, flex-start, column)
            }

            &.detail {
                @include flex(space-between);
            }

            &.center {
                @include flex();
            }

            .subtitle {
                font-size: 90%;
                color: $lightColor;
            }
        }

        .more {
            @include flex();
            .button {
                margin-right: 8px;
            }

            // 向右 图标
            .disclosure {
                width: 8px;
                height: 8px;

                border: 2px solid $lightColor;
                border-top: transparent;
                border-left: transparent;

                transform: rotate(-45deg);
            }
        }

        // 大cell
        &.large {
            height:1.6rem;
            .header-img {
                width: 1rem;
                height: 1rem;
                img {
                    width: 1rem;
                    height: 1rem;

                    border-radius: 0.04rem;
                }
            }
        }

        // 联系人 高度不同
        &.contact {
            height: 1.26rem;
        }

        &:not(:nth-last-of-type(1))::after {
            content: '';
            @include abs(auto, 0, 0, 0.24rem)
            height: 1px;
            background: $lineColor;
        }
        // cell 选中变暗
        &:active {
            background: $lineColor;
        }
    }

</style>
