<template lang="pug">
button(:class="[$style.btn, $style[type]]") {{ label }}
  font-awesome-icon(
    :class="$style.icon",
    :icon="icon",
    @click="() => emit('click')"
  )
</template>

<script setup lang="ts">
enum Type {
  a,
  b,
}
interface Prop {
  icon: string[];
  type: string;
}
interface Emit {
  (e: "click"): void;
}
const props = defineProps<Prop>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../assets/base"
.btn
    border-radius br-sm
    transition color
    display inline-block
    height 30px
    widows 30px
    text-align center
    &:hover
        color color-dark
        cursor pointer
        .icon
            color color-light
    .icon
        color color-dark
        transition color 0.3s

.a
    background-color color-main
.b
    background-color color-second
</style>
