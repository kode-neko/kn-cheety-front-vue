<template lang="pug">
div(:class="$style.cont")
  Transition(name="disapear")
    font-awesome-icon(
      v-if="tagListFilter.length > 0",
      :class="$style.icon",
      :icon="['fas', 'filter']"
    )
  TransitionGroup(name="disapear")
    TagInfo(
      v-for="tag in tagListFilter",
      :key="tag.id",
      :label="tag.label",
      @delete="() => deleteTag(tag)",
      type="a",
      :isDeletable="true"
    )
</template>

<script lang="ts">
import Tag from "../model/Tag";
import TagInfo from "./TagInfo.vue";
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  components: { TagInfo },
  props: {
    tagList: Array,
  },
  emits: ["deleteTag"],
  setup(props, { emit }) {
    const tagListFilter = ref(props.tagList);
    const deleteTag = (tag: Tag) => {
      tagListFilter.value = tagListFilter.value.filter(
        (ele: Tag) => ele.id !== tag.id
      );
      emit("deleteTag", tagListFilter.value);
    };
    return {
      tagListFilter,
      deleteTag,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
    display flex
    gap pd-md
    .icon
        color color-light
        height 28px
        width 28px
</style>
