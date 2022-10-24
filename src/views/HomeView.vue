<template lang="pug">
ModalMail(
  :isVisible="isVisibleModal",
  labelIzq="Cancel", 
  labelDer="Accept"
  @close="handlerClose",
  @left="handlerClose",
  @right="handlerMail",
)
Button(@click="isVisibleModal = !isVisibleModal") Mostrar Modal
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  props: {
    msg: String,
    msg02: String,
  },
  setup(props, { emit }) {
    return {};
  },
});
</script>

<style module lang="stylus">
@import "../assets/base"
.collection
  display flex
  padding pd-md
  gap pd-md
  flex-wrap wrap
  background-color color-main
  align-items center

.box
  margin-top pd-lg;
  display flex
  padding pd-md
  gap pd-md
  flex-wrap wrap
  background-color color-dark
  align-items center

.fufu
  padding 40px
  display flex
  flex-direction column
  gap pd-md
</style>
