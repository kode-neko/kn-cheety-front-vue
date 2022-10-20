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
import MenuDesktop from "../components/menu/MenuDesktop.vue";
import MenuMobile from "../components/menu/MenuMobile.vue";
import BtnIcon from "../components/btn/BtnIcon.vue";
import BtnIconNoBack from "../components/btn/BtnIconNoBack.vue";
import LoginMain from "../components/LoginMain.vue";
import ModalMail from "../modal/ModalMail.vue";
import { BoxBase, BoxArticle, BoxForm } from "../boxes";
import { defineComponent, ref } from "vue";
import type { EmailForm } from "@/model";

export default defineComponent({
  components: {
    BtnIcon,
    BtnIconNoBack,
    MenuDesktop,
    MenuMobile,
    BoxBase,
    BoxArticle,
    BoxForm,
    LoginMain,
    ModalMail,
  },
  props: {
    msg: String,
    msg02: String,
  },
  setup(props, { emit }) {
    const isVisibleModal = ref<boolean>(false);
    const handlerClose = () => {
      isVisibleModal.value = false;
    };
    const handlerMail = (mail: EmailForm) => {
      console.log(mail);
      isVisibleModal.value = false;
    };
    return {
      isVisibleModal,
      handlerClose,
      handlerMail,
    };
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
