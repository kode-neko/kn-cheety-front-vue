<template lang="pug">
ModalInfo(
  :isVisible="isVisibleModal",
  labelIzq="Cancel", 
  labelDer="Accept"
  @close="handlerClose",
  @left="handlerClose",
  @right="handlerClose",
  msg="Do you want to delete the resource?",
  :icon="['far', 'trash-can']"
)
Button(@click="isVisibleModal = !isVisibleModal") Mostrar Modal
</template>

<script lang="ts">
import MenuDesktop from "../components/menu/MenuDesktop.vue";
import MenuMobile from "../components/menu/MenuMobile.vue";
import BtnIcon from "../components/btn/BtnIcon.vue";
import BtnIconNoBack from "../components/btn/BtnIconNoBack.vue";
import LoginMain from "../components/LoginMain.vue";
import ModalInfo from "../modal/ModalInfo.vue";
import { Article } from "../model";
import { BoxBase, BoxArticle, BoxForm } from "../boxes";
import { defineComponent, ref } from "vue";

interface Tag {
  id: string;
  label: string;
}

interface ModelHome {
  value01: string;
  tagList: string[];
}

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
    ModalInfo,
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
    return {
      isVisibleModal,
      handlerClose,
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
