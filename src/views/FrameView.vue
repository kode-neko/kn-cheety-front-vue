<template lang="pug">
div(:class="$style.cont")
  div(:class="[$style.top, 'desktop']")
    MenuDesktopVue(@search="searchInput")
  div(:class="[$style.bottom, 'mobile']")
    MenuMobileVue(@search="searchInput")
  div(:class="$style.body")
    slot(name="article")
    slot(name="form")
  div(:class="$style.bottom")
    FooterMainVue(:credentials="credentials")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import MenuDesktopVue from "@/components/menu/MenuDesktop.vue";
import MenuMobileVue from "@/components/menu/MenuMobile.vue";
import FooterMainVue from "@/components/FooterMain.vue";
import { credentials } from "@/globals";
import { getArticles, deleteArticles } from "@/api/index";
import type { Article } from "@/model";
import { results } from "../globals";
import useLoadingStore from "@/stores/loading";

export default defineComponent({
  components: {
    MenuDesktopVue,
    MenuMobileVue,
    FooterMainVue,
  },
  props: {
    articles: Object as PropType<Article[]>,
  },
  setup() {
    const articles = ref<Article[]>([]);
    const strSaved = ref<string>("");
    const limit = ref<number>(results);
    const skip = ref<number>(0);
    const end = ref<boolean>(false);
    const loadingStore = useLoadingStore();
    const visibleModalDelete = ref<boolean>(false);
    const selectedArt = ref<string>("");

    const search = (
      str: string,
      articlesPrev: Article[],
      limit: number,
      skip: number
    ) => {
      loadingStore.setLoadingArticle(true);
      strSaved.value = str;
      const tags = str.length === 0 ? [] : str.split(" ");
      getArticles(tags, limit, skip)
        .then((arts: Article[]) => {
          loadingStore.setLoadingArticle(false);
          articles.value = [...articlesPrev, ...arts];
          checkEnd(arts.length, limit);
        })
        .catch((err) => {
          loadingStore.setLoadingArticle(false);
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
      skip.value = 0;
      end.value = false;
      search(str, articles.value as Article[], limit.value, skip.value);
    };

    const checkEnd = (artsLength: number, limit: number) => {
      if (artsLength === 0 || artsLength < limit) {
        end.value = true;
      }
    };

    const handleDelete = (id: string) => {
      selectedArt.value = id;
      visibleModalDelete.value = true;
    };
    const handleCloseModal = () => (visibleModalDelete.value = false);
    const handleAcceptModal = () => {
      visibleModalDelete.value = false;
      deleteArticles(selectedArt.value)
        .then((isDeleted) => {
          if (isDeleted) {
            const slicedArticles = articles.value.slice(
              0,
              articles.value.length - limit.value
            );
            search(
              strSaved.value,
              slicedArticles as Article[],
              limit.value,
              skip.value
            );
          }
        })
        .catch((err) => console.log(err));
    };

    return {
      articles,
      strSaved,
      limit,
      skip,
      end,
      loadingStore,
      search,
      loadMore,
      searchInput,
      credentials,
      visibleModalDelete,
      handleDelete,
      handleCloseModal,
      handleAcceptModal,
    };
  },
  mounted() {
    this.loadingStore.setLoadingArticle(true);
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
</style>
