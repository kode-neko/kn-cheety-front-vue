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
    input(
      v-model="mail.name",
      placeholder="Nombre",
    )
    input(
      v-model="mail.email",
      placeholder="Email",
    )
    textarea(v-model="mail.msg", placeholder="Mensaje...") 
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import ModalBase from "./ModalBase.vue";
import type { EmailForm } from "../model";

export default defineComponent({
  components: {
    ModalBase,
  },
  emit: ["close", "left", "right"],
  props: {
    isVisible: Boolean,
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
    const mail = ref<EmailForm>({ name: "", email: "", msg: "" });
    const handleClose = () => {
      emit("close");
    };
    const handleLeft = () => {
      emit("left");
    };
    const handleRight = () => {
      emit("right", mail);
    };
    return {
      mail,
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
  padding pd-md
  min-height 100%
  *
    margin-bottom pd-md
</style>
