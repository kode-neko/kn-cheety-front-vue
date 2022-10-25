<template lang="pug">
div(:class="$style.cont")
  div(:class="[$style.top, 'desktop']")
    MenuDesktopVue(@search="searchInput")
  div(:class="[$style.bottom, 'mobile']")
    MenuMobileVue(@search="searchInput")
  div(:class="$style.body")
    div(:class="$style.bodyContent")
      TransitionGroup(name="disapear")
        BoxArticleVue(
          v-for="art in articles" 
          :key="art.id", 
          :title="art.title", 
          :content="art.content", 
          :tags="art.tags"
          )
    div(v-if="!end" :class="$style.bodyBottom")
      BtnIcon(@click="loadMore", :icon="['fa', 'circle-plus']", size="sm", type="a", label="More Articles")
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
import { results } from "../globals";
import BtnIcon from "@/components/btn/BtnIcon.vue";

export default defineComponent({
  components: {
    MenuDesktopVue,
    MenuMobileVue,
    FooterMainVue,
    BoxArticleVue,
    BtnIcon,
  },
  setup() {
    const articles = ref<Article[]>([]);
    const strSaved = ref<string>("");
    const limit = ref<number>(results);
    const skip = ref<number>(0);
    const end = ref<boolean>(false);

    const search = (
      str: string,
      articlesPrev: Article[],
      limit: number,
      skip: number
    ) => {
      strSaved.value = str;
      const tags = str.length === 0 ? [] : str.split(" ");
      getArticles(tags, limit, skip)
        .then((arts: Article[]) => {
          articles.value = [...articlesPrev, ...arts];
          checkEnd(arts.length, limit);
        })
        .catch((err) => {
          checkEnd(articles.value.length, limit);
          console.error(err);
        });
    };

    const loadMore = () => {
      skip.value += limit.value;
      search(
        strSaved.value,
        articles.value as Article[],
        limit.value,
        skip.value
      );
    };

    const searchInput = (str: string) => {
      if (strSaved.value === str) return;
      articles.value = [];
      end.value = false;
      search(str, articles.value as Article[], limit.value, skip.value);
    };

    const checkEnd = (artsLength: number, limit: number) => {
      if (artsLength === 0 || artsLength < limit) {
        end.value = true;
      }
    };
    return {
      articles,
      strSaved,
      limit,
      skip,
      end,
      search,
      loadMore,
      searchInput,
      credentials,
    };
  },
  mounted() {
    this.search("", this.articles as Article[], this.limit, this.skip);
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
  flex-direction column
  gap pd-md
  .bodyContent
    display flex
    gap pd-md
    align-content flex-start
    justify-content center
    flex-wrap wrap
  .bodyBottom
    display flex
    justify-content center
</style>
