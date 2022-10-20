<template lang="pug">
button(:class="[$style.btn, $style[size], type]", @click="() => emit('click')") {{ label }}
</template>

<script setup lang="ts">
import type { Size, Type } from "../../model";
type Prop = {
  label: string;
  icon: string[];
  size: Size;
  type: Type;
}
interface Emit {
  (e: "click"): void;
}
const props = defineProps<Prop>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../../assets/base"
.btn
    color color-light
    border-radius br-sm
    transition color
    display block
    width 100%
    transition color 0.3s
    &:hover
        color color-dark
        cursor pointer
    &.sm
        padding pd-sm
    &.md
        padding pd-md
        font-weight bold
</style>
