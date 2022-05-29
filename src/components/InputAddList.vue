<template lang="pug">
div(:class="$style.cont")
  div(:class="$style.inputs")
    InputReseteable(modelValue="")
    InputReseteable(modelValue="")
    InputReseteable(modelValue="")
  div(:class="$style.action")
    BtnIcon(label="Add line", type="a", :icon="['fas', 'circle-plus']")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputReseteable from "./InputReseteable.vue";
import { BtnIcon } from "../components/btn";

export default defineComponent({
  props: {},
  components: { InputReseteable, BtnIcon },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
    width 100%
    .inputs
        display flex
        flex-direction column
        gap pd-sm
    .action
        margin-top pd-sm
</style>
