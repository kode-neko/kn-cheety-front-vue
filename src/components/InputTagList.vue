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
        :key="tag",
        :label="tag",
        :type="'a'",
        :isDeletable="true",
        @delete="() => deleteTag(tag)"
      )
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";
import TagInfo from "./TagInfo.vue";

export default defineComponent({
  props: {
    modelValue: Object as PropType<Array<string>>,
    placeholder: String,
  },
  components: { TagInfo },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const tagList = ref<Array<string>>([]);
    const valTag = ref<string>("");
    const chkKey = (event) => {
      if (!/[a-zA-Z0-9]/.test(event.key)) event.preventDefault();
    };
    const deleteTag = (tag: string) => {
      tagList.value = tagList.value.filter((t: string) => t !== tag);
      emit("update:modelValue", tagList);
    };
    const insertTag = (value: string) => {
      if (!tagList.value.find((tag: string) => tag === value)) {
        const valTrim = value.trim().toLowerCase();
        tagList.value = [...tagList.value, valTrim];
        emit("update:modelValue", tagList.value);
        valTag.value = "";
      }
    };
    watch(
      () => props.modelValue,
      (act) => {
        tagList.value = act as Array<string>;
      }
    );
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
