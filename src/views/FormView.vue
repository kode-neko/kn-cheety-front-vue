<template lang="pug">
FrameView(:search="searchInput")
  template(#form)
    div(:class="$style.cont")
      BoxForm(:article="article")
    
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import FrameView from "./FrameView.vue";
import { BoxForm } from "@/components/boxes";
import type { Article } from "@/model";
import { IArticle } from "../model";
import useUserStore from "@/stores/user";

export default defineComponent({
  components: {
    FrameView,
    BoxForm,
  },
  props: {},
  setup() {
    const article = ref<IArticle>({
      title: "",
      body: "" as string,
      tags: [],
      author: "",
      lang: "es",
    });
    return { article };
  },
  mounted() {},
  unmounted() {
    const userStore = useUserStore();
    userStore.deleteArticle();
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"

.cont
  display flex
  align-content center
  width 100%
  justify-content center
  margin-top pd-sm
</style>
