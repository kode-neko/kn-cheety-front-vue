<template lang="pug">
div(:class="$style.square", @click="emit('click')")
  font-awesome-icon(:icon="icon")
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}
interface Emit {
  (e: "click"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../assets/base"

.square
  display inline-block
  height 42px
  width 42px
  text-align center
  background-color color-dark
  border-radius br-sm
  &>*
    height 22px
    width 22px
    color color-light
    position relative
    top 9px
  &:hover
    cursor pointer
    background-color color-dark-02
</style>
