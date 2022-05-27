<template lang="pug">
div(:class="$style.cont")
  h2(:class="$style.title") {{ title }}
  div
    slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup(props, p) {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
  padding pd-md
  background-color color-dark
  border-radius br-md
  .title
    font-size 24px
    color color-main
    font-weight bold
    margin-bottom pd-md
</style>