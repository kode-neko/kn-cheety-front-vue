<template lang="pug">
ModalBase(
  :isVisible="isVisible",
  :labelIzq="labelIzq", 
  :labelDer="labelDer"
  @close="handleClose",
  @left="handleLeft",
  @right="handleRight",
)
  div(:class="$style.cont")
    div(:class="$style.iconCont")
      font-awesome-icon(
        :class="$style.icon",
        :icon="icon"
      )
    div(:class="$style.msg") {{msg}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import ModalBase from "./ModalBase.vue";

export default defineComponent({
  components: {
    ModalBase,
  },
  emit: ["close", "left", "right"],
  props: {
    isVisible: Boolean,
    icon: Object as PropType<Array<string>>,
    msg: String,
    labelIzq: {
      type: String,
      required: true,
      default: "Cancel",
    },
    labelDer: {
      type: String,
      required: true,
      default: "Accept",
    },
  },
  setup(props, { emit }) {
    const handleClose = () => {
      emit("close");
    };
    const handleLeft = () => {
      emit("left");
    };
    const handleRight = () => {
      emit("right");
    };
    return {
      handleClose,
      handleLeft,
      handleRight,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"

.cont
  padding pd-lg
  .iconCont
    color color-main
    text-align center
    padding pd-sm
    .icon
      height icon-lg
      width icon-lg
  .msg
    margin-top pd-md
    font-size 24px
    text-align center
    color color-light
</style>
