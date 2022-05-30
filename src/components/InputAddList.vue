<template lang="pug">
div(:class="$style.cont")
  div(:class="$style.inputs")
    TransitionGroup(name="disapear")
      InputReseteable(
        v-for="(line, index) in lineList",
        :modelValue="line",
        @delete="() => handleDelete(index)"
      )
  div(:class="$style.action")
    BtnIcon(
      label="Add line",
      type="a",
      :icon="['fas', 'circle-plus']",
      @click="addLine"
    )
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputReseteable from "./InputReseteable.vue";
import { BtnIcon } from "../components/btn";

export default defineComponent({
  props: {
    modelValue: Array,
  },
  components: { InputReseteable, BtnIcon },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const lineList = ref<Array<unknown>>(props.modelValue);
    const handleDelete = (indexDeleted) => {
      lineList.value = lineList.value.filter(
        (ele, index) => index !== indexDeleted
      );
    };
    const addLine = () => {
      lineList.value = [...lineList.value, ""];
    };
    return {
      lineList,
      handleDelete,
      addLine,
    };
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
