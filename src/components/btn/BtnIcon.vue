<template lang="pug">
button(
  :class="[$style.btn, $style[size], type, 'trans-color']",
  @click="() => emit('click')"
)
  font-awesome-icon(
    :class="{ 'icon-xs': size == 'sm', 'icon-sm': size == 'md' }",
    :icon="icon"
  )
  span(:class="$style.label") {{ label }}
</template>

<script setup lang="ts">
import type { Size, Type } from "../../model";
type Props = {
  label: string;
  icon: string[];
  size: Size;
  type: Type;
}
type Emit = {
  (e: "click"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../../assets/base"
.btn
    color color-dark
    border-radius br-sm
    display flex
    align-items center
    &.sm
      padding pd-xs
    &.md
      padding pd-sm
    &:hover
      color color-light
      cursor pointer
    .label
      margin-left pd-xs
      display inline-block
</style>
