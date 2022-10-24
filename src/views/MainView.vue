<template lang="pug">
div(:class="$style.cont")
  div(:class="[$style.top, 'desktop']")
    MenuDesktopVue
  div(:class="[$style.bottom, 'mobile']")
    MenuMobileVue
  div(:class="$style.body")
    BoxArticleVue(
      v-for="art in articles" 
      :key="art.id", 
      :title="art.title", 
      :content="art.content", 
      :tags="art.tags"
      )
  div(:class="$style.bottom")
    FooterMainVue(:credentials="credentials")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuDesktopVue from "@/components/menu/MenuDesktop.vue";
import MenuMobileVue from "@/components/menu/MenuMobile.vue";
import FooterMainVue from "@/components/FooterMain.vue";
import BoxArticleVue from "@/components/boxes/BoxArticle.vue";
import { credentials } from "@/globals";
import { getArticles } from "@/api/index";
import { Article } from "@/model";

export default defineComponent({
  components: { MenuDesktopVue, MenuMobileVue, FooterMainVue, BoxArticleVue },
  setup() {
    const articles = ref<Article[]>([]);
    window.addEventListener(
      "scroll",
      function (evt) {
        console.log("SCROLL", window.scrollY);
        console.log("HEIGHT", window.innerHeight);
      },
      false
    );
    return { articles, credentials };
  },
  mounted() {
    getArticles([])
      .then((arts: Article[]) => {
        this.articles = arts;
      })
      .catch((err) => console.error(err));
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
  display flex
  flex-direction column
  justify-content space-between
.body
  padding pd-md
  flex-basis calc(100vh - 148px)
  display flex
  gap pd-md
  align-content flex-start
  justify-content center
  flex-wrap wrap
</style>
