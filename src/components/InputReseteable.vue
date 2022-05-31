<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    modelValue: String,
    placeholder: String,
  },
  emits: ["update:modelValue", "delete"],
  setup(props, { emit }) {
    const deleteContent = () => {
      emit("update:modelValue", "");
      emit("delete");
    };
    const updateContent = (e: Event) => {
      console.log("inputreseteable");
      emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    return {
      deleteContent,
      updateContent,
    };
  },
});
</script>

<template lang="pug">
div(:class="$style.cont")
  input(
    :value="modelValue",
    :class="$style.input",
    :placeholder="placeholder",
    @input="(e) => updateContent(e)"
  )
  font-awesome-icon(
    :class="$style.icon",
    :icon="['fa', 'circle-xmark']",
    @click="deleteContent"
  )
</template>

<style lang="stylus" module>
@import "../assets/base"
.cont
    position relative
    width 100%
    height 40px
    .input
        font-size 18px
        border none
        border-radius br-sm
        box-sizing border-box
        background-color color-light
        position absolute
        padding pd-md
        width 100%
        height 40px
        top 0
        left 0
        &:focus
            outline 4px solid color-main
        &::placeholder
            color color-main
            font-style italic
    .icon
        height 24px
        width 24px
        color color-dark
        position absolute
        top 9px
        right 10px
        transition color 0.3s
        &:hover
            cursor pointer
            color color-main
</style>
