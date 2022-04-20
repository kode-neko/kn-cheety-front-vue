<template lang="pug">
div(:class="$style.btn", @click="toggleBtnHandler")
  div(:class="$style.left")
    font-awesome-icon(
      :class="{ [$style.leftSideCont]: isLeft, [$style.rightSideCont]: !isLeft }",
      :icon="iconLeft"
    )
  div(:class="$style.right")
    font-awesome-icon(
      :class="{ [$style.leftSideCont]: !isLeft, [$style.rightSideCont]: isLeft }",
      :icon="iconRight"
    )
  div(
    :class="{ [$style.tick]: true, [$style.leftSide]: isLeft && !isInit, [$style.rightSide]: !isLeft && !isInit }"
  )
div {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { props, emits, useSw } from "./useSw";

const { iconLeft, iconRight, valLeft, valRight } = props;

export default defineComponent({
  props: { iconLeft, iconRight, valLeft, valRight },
  emits,
  setup(props, { emit }) {
    return useSw(props, emit);
  },
});
</script>

<style lang="stylus" module>
@import "./style.styl"
.btn
  btn(color-light, color-dark, color-dark)
  .left
      square()
  .right
      square()
  .tick
      tick(color-dark)
</style>
