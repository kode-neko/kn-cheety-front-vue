<template lang="pug">
div(:class="$style.cont")
  div(:class="$style.icon")
    font-awesome-icon(
        :class="$style.icon",
        :icon="['fas', 'filter']"
      )
  div(:class="$style.msg") {{msg}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    icon: Object as PropType<string[]>,
    msg: String,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../../assets/base"

.cont
  position relative
  right 0
  top 300px
  padding pd-sm
  background-color color-main
  color color-light
  width 300px
  display flex
  justify-content start
  .icon
    margin-right pd-sm
    font-size icon-sm
</style>
