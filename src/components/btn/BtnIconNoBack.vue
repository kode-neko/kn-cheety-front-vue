<template lang="pug">
button(:class="[$style.btn]", @click="() => emit('click')")
  font-awesome-icon(
    :class="{ [$style[type]]: true, ['trans-color']: true, 'icon-sm': size == 'sm', 'icon-md': size == 'md' }",
    :icon="icon"
  )
  span(v-if="label", :class="[$style.label, $style[type], $style[size]]") {{ label }}
</template>

<script setup lang="ts">
import { Size, Type } from "../../model";
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
@import "../../assets/base"
.btn
  background none
  color color-dark
  border-radius br-sm
  display flex
  align-items center
  padding 0
  &:hover
    cursor pointer
    .a
      color color-light
    .b
      color color-light
  .label
    margin-left pd-xs
    display inline-block
  .a
    transition color 0.3s
    color color-main
  .b
    transition color 0.3s
    color color-second
  .sm
    font-size 24px
  .md
    font-size 30px
</style>
