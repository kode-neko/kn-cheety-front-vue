<template lang="pug">
div(:class="$style.cont")
  input(
    v-if="editable",
    :class="$style.title",
    placeholder="Inserte el título",
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  )
  h2(v-else, :class="$style.title") {{ title }}
  div
    slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    editable: Boolean,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, p) {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../../assets/base"
.cont
  padding pd-md
  background-color color-dark
  border-radius br-md
  input.title
    padding 0
    &:focus
        outline none
  .title
    font-size 24px
    color color-main
    font-weight bold
    margin-bottom pd-md
    background none
    border none
    &::placeholder
      font-style italic
      color color-main
      font-weight normal
</style>
