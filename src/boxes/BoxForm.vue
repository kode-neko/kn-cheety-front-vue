<template lang="pug">
div(:class="$style.cont")
  BoxBase(:title="afState.title", :editable="true")
    div(:class="$style.form")
      SwTypeForm(
        labelLeft="List",
        labelRight="Text",
        valLeft="list",
        valRight="text",
        @toggle="(val) => swFormType(val)"
      )
      Transition(name="disapear")
        InputAddList(v-if="isVisibleList", :modelValue="afState.bodyList")
        textarea(v-else, :class="$style.txtarea", v-model="afState.body")
      InputTagList(
        :modelValue="afState.tagList",
        placeholder="Introduzca las etiquetas"
      )
  div(:class="$style.btns")
    BtnIcon(
      label="Delete",
      :icon="['fas', 'circle-xmark']",
      size="md",
      type="b"
    )
    BtnIcon(label="Save", :icon="['fas', 'circle-check']", size="md", type="b", @click="handleSave")
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
    const af = new ArticleForm(undefined, props.article);
    const afState = ref<ArticleForm>(af);
    const swFormType = (val) => {
      isVisibleList.value = val === "list";
    };
    const handleDelete = () => {
      emit("delete");
    };
    const handleSave = () => {
      const articleSaved = new Article(undefined, afState.value as ArticleForm);
      emit("save", articleSaved);
    };
    return {
      isVisibleList,
      afState,
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