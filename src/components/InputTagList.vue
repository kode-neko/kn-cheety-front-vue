<template lang="pug">
div(:class="$style.cont")
  input(
    :class="$style.input",
    @keydown="(e) => chkKey(e)",
    @keyup.enter="(e) => insertTag(e.target.value)",
    v-model="valTag",
    :placeholder="placeholder"
  )
  div(:class="$style.tags")
    TransitionGroup(name="disapear")
      TagInfo(
        v-for="tag in tagList",
        :key="tag.id",
        :label="tag.label",
        :type="'a'",
        :isDeletable="true",
        @delete="() => deleteTag(tag)"
      )
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TagInfo from "./TagInfo.vue";
import Tag from "../model/Tag";

interface Props {
  initTagList: Array<unknown>;
  placeholder: string;
}

interface Emits {
  (e: "update:modelValue", value: Array<Tag>): void;
}

export default defineComponent({
  props: {
    modelValue: Array,
    placeholder: String,
  },
  components: { TagInfo },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const tagList = ref(props.modelValue);
    const valTag = ref("");
    const chkKey = (event) => {
      if (!/[a-zA-Z0-9]/.test(event.key)) event.preventDefault();
    };
    const deleteTag = (tag) => {
      tagList.value = tagList.value.filter(
        (tagAux: Tag) => tagAux.id !== tag.id
      );
      emit("update:modelValue", tagList);
    };
    const insertTag = (value: string) => {
      if (!tagList.value.find((tag: Tag) => tag.label === value)) {
        const valTrim = value.trim().toLowerCase();
        tagList.value = [...props.modelValue, { id: valTrim, label: valTrim }];
        emit("update:modelValue", tagList.value);
        valTag.value = "";
      }
    };
    return {
      tagList,
      valTag,
      chkKey,
      deleteTag,
      insertTag,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
    width: 100%
    .input
        display block
        font-size 18px
        border none
        border-radius br-sm
        box-sizing border-box
        background-color color-light
        padding pd-md
        height 40px
        width: 100%
        &:focus
            outline 4px solid color-main
        &::placeholder
            color color-main
            font-style italic
    .tags
        margin-top pd-md
        display flex
        flex-wrap wrap
        gap pd-md
</style>
