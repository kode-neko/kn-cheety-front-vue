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
      BtnIconNoBack(
        type="a",
        size="sm",
        :icon="['fas', 'magnifying-glass']",
        label="search"
      )
  div(:class="$style.right")
    BtnIconNoBack(type="a", size="md", :icon="['far', 'envelope']")
    BtnIconNoBack(type="a", size="md", :icon="['fas', 'share-nodes']")
    BtnIconNoBack(
      type="a",
      size="md",
      :icon="['fas', 'arrow-right-from-bracket']"
    )
    SwTypeForm(
      :valLeft="'moon'",
      :valRight="'sun'",
      :labelLeft="'Light'",
      :labelRight="'Dark'",
      @toggle="(side) => { msg2 = side; }"
    )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BtnIcon, BtnIconNoBack } from "../btn";
import SwTypeForm from "../sw/SwTypeForm.vue";

export default defineComponent({
  components: { BtnIcon, BtnIconNoBack, SwTypeForm },
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
            display flex
            gap pd-md
    .right
        position relative
        display flex
        gap pd-md
        align-items: center
        .icon
          color color-main
          height icon-md
          width icon-md
          :hover
            color color-light
            cursor pointer

        
</style>
