<template lang="pug">
FrameView(:search="searchInput")
  template(#form)
    div(:class="$style.cont")
      BoxForm(:article="articleForm", @save="handleSave")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import FrameView from "./FrameView.vue";
import { BoxForm } from "@/components/boxes";
import {
  ArticleFormType,
  IArticle,
  IArticleForm,
  toArticleForm,
} from "../model";
import useUserStore from "@/stores/user";
import { createArticle, getArticle, updateArticle } from "@/api";
import router from "@/router";

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
    const handleSave = (art: IArticle) => {
      // Update
      if (art.id) {
        updateArticle(art)
          .then((res) => router.push("/main"))
          .catch((err) => console.log(err));
      }
      // Create
      else {
        const store = useUserStore();
        const { user, lang } = store.getUser;
        createArticle({ ...art, author: user, lang })
          .then((res) => router.push("/main"))
          .catch((err) => console.log(err));
      }
    };
    return { articleForm, handleSave };
  },
  mounted() {
    const userStore = useUserStore();
    const idArticle = userStore.getArticle;
    if (idArticle) {
      getArticle(idArticle)
        .then((art) => {
          this.articleForm = toArticleForm(art);
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
