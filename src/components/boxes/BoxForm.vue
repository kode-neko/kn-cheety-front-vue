<template lang="pug">
div(:class="$style.cont")
  BoxBase(
    :editable="true",
    :modelValue="afState.title",
    @update:modelValue="(newVal) => (afState.title = newVal)"
  )
    div(:class="$style.form")
      SwTypeForm(
        labelLeft="List",
        labelRight="Text",
        valLeft="list",
        valRight="text",
        @toggle="(val) => swFormType(val)"
      )
      Transition(name="disapear")
        InputAddList(
          v-if="isVisibleList",
          :modelValue="afState.bodyList",
          @update:modelValue="(newVal) => (afState.bodyList = newVal)"
        )
        textarea(v-else, :class="$style.txtarea", v-model="afState.body")
      InputTagList(
        :modelValue="afState.tagList",
        @update:modelValue="(newVal) => (afState.tagList = newVal)",
        placeholder="Introduzca las etiquetas"
      )
  div(:class="$style.btns")
    BtnIcon(
      label="Save",
      :icon="['fas', 'circle-check']",
      size="md",
      type="b",
      @click="handleSave"
    )
    patata
</template>

<script lang="ts">
import BoxBase from "./BoxBase.vue";
import SwTypeForm from "@/components/sw/SwTypeForm.vue";
import InputTagList from "@/components/InputTagList.vue";
import InputAddList from "@/components/InputAddList.vue";
import { articleToIArticleForm, IArticle, IArticleForm } from "@/model";
import { BtnIcon } from "@/components/btn";
import { defineComponent, ref, PropType } from "vue";
import { articleFormToIArticle, ArticleFormType } from "../../model";

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
    article: Object as PropType<IArticle>,
  },
  setup(props, { emit }) {
    const isVisibleList = ref<boolean>(true);
    const af = articleToIArticleForm(props.article as IArticle);
    const aux = { ...af };
    const afState = ref<IArticleForm>(aux);
    const swFormType = (val: ArticleFormType) => {
      isVisibleList.value = val === "list";
      afState.value.type = val;
    };
    const handleDelete = () => {
      emit("delete");
    };
    const handleSave = () => {
      const articleSaved = articleFormToIArticle(afState.value);
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
@import "../../assets/base"
.cont
  flex-basis 900px
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
    flex-direction row-reverse
</style>
