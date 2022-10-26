<template lang="pug">
BoxBase(:title="title")
  div(v-if="typeof content === 'string'") {{ content }}
  div(v-else)
    ul(:class="$style.list") 
      li(v-for="c in content") {{c}}
  div(:class="$style.footer")
    div(:class="$style.left")
      TagInfo(
        v-for="tag in tags",
        :key="tag",
        :label="tag",
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
import { BtnIcon } from "@/components/btn";
import TagInfo from "@/components/TagInfo.vue";
import { defineComponent, PropType } from "vue";
import { Article, Tag } from "../../model";

export default defineComponent({
  components: {
    BoxBase,
    BtnIcon,
    TagInfo,
  },
  emit: ["edit", "delete"],
  props: {
    title: String,
    content: Object as PropType<string | Array<string>>,
    tags: Object as PropType<Tag[]>,
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
@import "../../assets/base"

.list
  list-style disc
  padding-left pd-md
.footer
  display flex
  justify-content space-between
  margin-top pd-md
  .left,.right
    display flex
    gap pd-sm
  .left
    flex-wrap wrap
  .right
    align-content flex-start
    align-items flex-start
    justify-content flex-end
</style>
