<template lang="pug">
FrameView(:search="searchInput")
  template(#form)
    div(:class="$style.cont")
      BoxForm(:article="articleForm")
    
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import FrameView from "./FrameView.vue";
import { BoxForm } from "@/components/boxes";
import { ArticleFormType, articleToIArticleForm, IArticleForm } from "../model";
import useUserStore from "@/stores/user";
import { getArticle } from "@/api";

export default defineComponent({
  components: {
    FrameView,
    BoxForm,
  },
  setup() {
    const articleForm = ref<IArticleForm>({
      title: "",
      type: undefined,
      contentList: [],
      content: "",
      tags: [],
    });
    return { articleForm };
  },
  mounted() {
    const userStore = useUserStore();
    const idArticle = userStore.getArticle;
    if (idArticle) {
      getArticle(idArticle)
        .then((art) => {
          this.articleForm = articleToIArticleForm(art);
        })
        .catch((err) => console.log(err));
    }
  },
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
