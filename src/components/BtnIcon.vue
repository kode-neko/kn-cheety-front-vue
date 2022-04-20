<template lang="pug">
button(
  :class="[$style.btn, $style[size], $style[type]]",
  @click="() => emit('click')"
)
  font-awesome-icon(:class="$style.icon", :icon="icon")
  span {{ label }}
</template>

<script setup lang="ts">
enum Type {
  a,
  b,
}
enum Size {
  sm,
  md,
}
interface Props {
  label: string;
  icon: string[];
  size: Size;
  type: Type;
}
interface Emit {
  (e: "click"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../assets/base"
.btn
    color color-dark
    border-radius br-sm
    transition color
    transition color 0.3s
    &:hover
        color color-light
        cursor pointer
        .icon
            color color-light
    &.sm
        height 30px
        line-height 30px
        .icon
            height 16px
            width 16px
            margin-bottom: 1px;
    &.md
        padding pd-sm
        .icon
            height 24px
            width 24px
        & span
            display: inline-block
            position relative
            top -3px
    .icon
        color color-dark
        margin-right pd-xs
.a
    background-color color-main
.b
    background-color color-second
</style>
