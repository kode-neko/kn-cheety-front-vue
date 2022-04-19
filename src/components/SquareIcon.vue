<template lang="pug">
div(:class="$style.square")
  font-awesome-icon(:icon="icon")
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}
const props = defineProps<Props>();
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
</style>
