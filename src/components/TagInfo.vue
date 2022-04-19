<template lang="pug">
div(@click="click", :class="[$style.tag, $style[type]]") {{ label }}
  if isDeletable
    font-awesome-icon(:class="$style.icon", :icon="['fa', 'circle-xmark']")
</template>

<script setup lang="ts">
enum Type {
  a,
  b,
}
interface Props {
  label: string;
  type: Type;
  isDeletable: boolean;
}
interface Emits {
  (e: "click", payload: Record<string, never>): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style lang="stylus" module>
@import "../assets/base"
.tag
    border-radius br-sm
    height 30px
    padding 0 pd-sm
    color color-dark
    line-height 30px
    transform translate(0, 0)
    transition transform 0.3s
    &.a
        background-color color-main
    &.b
        background-color color-second
    &:hover
        transform translate(-2px, -2px)

.icon
    color color-dark
    margin-left pd-sm
    transition color 0.3s
    &:hover
        cursor pointer
        color color-light
</style>
