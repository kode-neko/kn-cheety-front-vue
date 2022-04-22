<template lang="pug">
button(
  :class="[$style.btn, $style[size], $style[type]]",
  @click="() => emit('click')"
)
  font-awesome-icon(:class="$style.icon", :icon="icon")
  span(:class="$style.label") {{ label }}
</template>

<script setup lang="ts">
interface Props {
  label: string;
  icon: string[];
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
  color color-main
  background none
  border-radius br-sm
  transition color 0.3s
  .icon
    margin-right pd-sm
    height 30px
    width 30px
  .label
    font-size 28px
    position: relative;
    top: -2px;
  &:hover
    color color-light
    cursor pointer
</style>
