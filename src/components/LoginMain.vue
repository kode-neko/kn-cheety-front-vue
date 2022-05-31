<template lang="pug">
div(:class="$style.cont")
  h1(:class="$style.title") Cheety
  input(:class="$style.user")
  input(:class="$style.pass", type="password")
  BtnWide(label="Login", size="sm", type="a")
  BtnWide(:class="$style.btnGuest", label="Login", size="md", type="b")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BtnWide } from "../components/btn";

export default defineComponent({
  props: {},
  components: {
    BtnWide,
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
    background-color color-dark
    display flex
    flex-direction column
    gap pd-md
    padding pd-md
    border-radius br-md
    max-width 310px
    .title
        font-family 'Bebas Neue'
        font-size 64px
        margin-bottom pd-md
        text-align center
    .btnGuest
        margin-top pd-md
</style>
