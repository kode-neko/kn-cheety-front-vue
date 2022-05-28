<template lang="pug">
BoxBase(:title="title")
  div {{ content }}
  div(:class="$style.footer")
    div(:class="$style.left")
      TagInfo(
        v-for="tag in tagList",
        :key="tag.id",
        :label="tag.label",
        :type="'a'",
        :isDeletable="false",
        @delete="() => deleteTag(tag)"
      )
    div(:class="$style.right")
      BtnIcon(:icon="['fa', 'trash-can']", size="sm", type="b")
      BtnIcon(:icon="['fas', 'pencil']", size="sm", type="b")
</template>

<script lang="ts">
import BoxBase from "./BoxBase.vue";
import { BtnIcon } from "../components/btn";
import TagInfo from "../components/TagInfo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BoxBase,
    BtnIcon,
    TagInfo,
  },
  emit: ["edit", "delete"],
  props: {
    title: String,
    content: String,
    tagList: Array,
  },
  setup(props, { emit }) {
    const handleDelete = () => {
      emit("delete");
    };
    const handleEdit = () => {
      emit("edit");
    };
    return {
      handleDelete,
      handleEdit,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.footer
  display flex
  justify-content space-between
  margin-top pd-md
  .right
      display flex
      gap pd-sm
</style>