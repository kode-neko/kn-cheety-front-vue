<template lang="pug">
div(:class="$style.cont")
  BoxBase(:title="articleState.title", :editable="true")
    div(:class="$style.form")
      SwTypeForm(
        labelLeft="List",
        labelRight="Text",
        valLeft="list",
        valRight="text",
        @toggle="(val) => swFormType(val)"
      )
      Transition(name="disapear")
        InputAddList(v-if="isVisibleList", :modelValue="articleState.bodyList")
        textarea(v-else, :class="$style.txtarea", v-model="articleState.body")
      InputTagList(:modelValue="[]", placeholder="Introduzca las etiquetas")
  div(:class="$style.btns")
    BtnIcon(
      label="Delete",
      :icon="['fas', 'circle-xmark']",
      size="md",
      type="b"
    )
    BtnIcon(label="Save", :icon="['fas', 'circle-check']", size="md", type="b")
</template>

<script lang="ts">
import BoxBase from "./BoxBase.vue";
import SwTypeForm from "../components/sw/SwTypeForm.vue";
import InputTagList from "../components/InputTagList.vue";
import InputAddList from "../components/InputAddList.vue";
import { Article, ArticleForm } from "../model";
import { BtnIcon } from "../components/btn";
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  components: {
    BoxBase,
    SwTypeForm,
    InputTagList,
    InputAddList,
    BtnIcon,
  },
  emit: ["delete", "save"],
  props: {
    article: Object as PropType<Article>,
  },
  setup(props, { emit }) {
    const isVisibleList = ref<boolean>(true);
    const af = new Article();
    const articleState = ref<ArticleForm>(props.article);
    const swFormType = (val) => {
      isVisibleList.value = val === "list";
    };
    const handleDelete = () => {
      emit("delete");
    };
    const handleSave = () => {
      emit("save");
    };
    return {
      isVisibleList,
      articleState,
      swFormType,
      handleDelete,
      handleSave,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
  .form
    display flex
    flex-direction column
    gap pd-md
    align-items start
    .txtarea
      font-size 18px
      border none
      border-radius br-sm
      box-sizing border-box
      background-color color-light
      padding pd-md
      width 100%
      min-height 130px
      &:focus
          outline 4px solid color-main
      &::placeholder
          color color-main
          font-style italic
  .btns
    margin-top pd-md
    display flex
    justify-content end
    gap pd-md
</style>