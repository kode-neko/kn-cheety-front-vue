<template lang="pug">
div(:class="$style.cont")
  div(:class="$style.left")
    h1 Cheety
    div(:class="$style.ctrls")
      BtnIcon(
        label="Create",
        :icon="['fas', 'circle-plus']",
        size="sm",
        type="a"
      )
  div(:class="$style.right")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BtnIcon from "../BtnIcon.vue";

export default defineComponent({
  components: { BtnIcon },
  setup() {},
});
</script>

<style lang="stylus" module>
@import "../../assets/base"
.cont
    display flex
    justify-content space-between
    background-color color-dark
    padding pd-md
    margin-top 40px
    box-sizing border-box
    width 100%
    .left
        display flex
        align-items center
        gap pd-md
        h1
            font-family 'Bebas Neue', cursive
            font-size 40px
            color color-light
        .ctrls
            position relative
    .right
        position relative
        
</style>
