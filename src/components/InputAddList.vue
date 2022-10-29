<template lang="pug">
div(:class="$style.cont")
  div(:class="$style.inputs")
    TransitionGroup(name="disapear")
      InputReseteable(
        v-for="(line, index) in lineList",
        :modelValue="line",
        @update:modelValue="(newVal) => handleModifyList(newVal, index)",
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
import { defineComponent, ref, watch } from "vue";
import type { PropType } from "vue";
import InputReseteable from "./InputReseteable.vue";
import { BtnIcon } from "../components/btn";

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Array<string>>,
      default: () => {
        return new Array<string>();
      },
    },
  },
  components: { InputReseteable, BtnIcon },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const lineList = ref<Array<string>>(props.modelValue as Array<string>);
    if (lineList.value.length === 0) {
      lineList.value = [""];
    }
    const handleModifyList = (newVal: string, indexMod: number) => {
      console.log("handleModifyList");
      lineList.value = lineList.value.map((ele, index) =>
        index === indexMod ? newVal : ele
      );
      let externalList = lineList.value.filter((ele) => ele.length !== 0);
      emit("update:modelValue", externalList);
    };
    const handleDelete = (indexDeleted: number) => {
      const listAux = lineList.value.filter(
        (ele, index) => index !== indexDeleted
      );
      lineList.value = listAux.length === 0 ? [""] : listAux;
      let externalList = lineList.value.filter((ele) => ele.length !== 0);
      emit("update:modelValue", externalList);
    };
    const addLine = () => {
      lineList.value = [...lineList.value, ""];
    };
    watch(
      () => props.modelValue,
      (act, prev) => {
        lineList.value = act as Array<string>;
      }
    );
    return {
      lineList,
      handleModifyList,
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
