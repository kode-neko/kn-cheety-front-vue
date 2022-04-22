<template lang="pug">
div(:class="[$style.tag, type]") {{ label }}
  if isDeletable
    font-awesome-icon(
      :class="$style.icon",
      :icon="['fa', 'circle-xmark']",
      @click="() => emit('delete')"
    )
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
interface Emit {
  (e: "delete"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
</script>

<style lang="stylus" module>
@import "../assets/base"
.tag
    border-radius br-sm
    height 30px
    padding 0 pd-sm
    color color-dark
    line-height 30px
.icon
    color color-dark
    margin-left pd-sm
    transition color 0.3s
    &:hover
        cursor pointer
        color color-light
</style>
