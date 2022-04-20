<template lang="pug">
div(:class="$style.btn", @click="toggleBtnHandler")
  div(:class="$style.left")
    span {{ labelLeft }}
  div(:class="$style.right")
    span {{ labelRight }}
  div(
    :class="{ [$style.tick]: true, [$style.leftSide]: isLeft && !isInit, [$style.rightSide]: !isLeft && !isInit }"
  )
div {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { props, emits, useSw } from "./useSw";

const { labelLeft, labelRight, valLeft, valRight } = props;

export default defineComponent({
  props: {
    labelLeft,
    labelRight,
    valLeft,
    valRight,
  },
  emits,
  setup(props, { emit }) {
    return useSw(props, emit);
  },
});
</script>

<style lang="stylus" module>
@import "./style.styl"
.btn
  btn(color-main, color-main, color-light)
  .left
      square()
  .right
      square()
  .tick
      tick(color-dark)
</style>
