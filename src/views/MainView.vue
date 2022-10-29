<template lang="pug">
FrameView(:search="searchInput")
  template(#article)
    div(:class="$style.bodyContent")
      TransitionGroup(name="disapear")
        BoxArticleVue(
          v-for="art in articles" 
          :key="art.id", 
          :title="art.title", 
          :content="art.content", 
          :tags="art.tags"
          @delete="() => handleDelete(art.id)"
          @edit="() => handleEdit(art.id)"
        )
    div(v-if="!end" :class="$style.bodyBottom")
      BtnIcon(@click="loadMore", :icon="['fa', 'circle-plus']", size="sm", type="a", label="More Articles")
    div(:class="$style.loading")
      SpinnerLoad(v-if="loadingStore.isLoadingArticle")
    ModalInfo(
      @close="handleCloseModal",
      @left="handleCloseModal",
      @right="handleAcceptModal",
      :isVisible="visibleModalDelete", 
      :icon="['fa', 'trash-can']", 
      msg="¿Desea borrar el artículo?", 
      labelIzq="Cancelar", 
      label-der="Borrar"
    )
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import MenuDesktopVue from "@/components/menu/MenuDesktop.vue";
import MenuMobileVue from "@/components/menu/MenuMobile.vue";
import FooterMainVue from "@/components/FooterMain.vue";
import BoxArticleVue from "@/components/boxes/BoxArticle.vue";
import { credentials } from "@/globals";
import { getArticles, deleteArticles } from "@/api/index";
import { results } from "../globals";
import BtnIcon from "@/components/btn/BtnIcon.vue";
import useLoadingStore from "@/stores/loading";
import SpinnerLoad from "@/components/SpinnerLoad.vue";
import ModalInfo from "../modal/ModalInfo.vue";
import FrameView from "./FrameView.vue";
import useUserStore from "@/stores/user";
import router from "@/router";
import { IArticle } from "../model";

export default defineComponent({
  components: {
    MenuDesktopVue,
    MenuMobileVue,
    FooterMainVue,
    BoxArticleVue,
    BtnIcon,
    SpinnerLoad,
    ModalInfo,
    FrameView,
  },
  setup() {
    const articles = ref<IArticle[]>([]);
    const strSaved = ref<string>("");
    const limit = ref<number>(results);
    const skip = ref<number>(0);
    const end = ref<boolean>(false);
    const loadingStore = useLoadingStore();
    const visibleModalDelete = ref<boolean>(false);
    const selectedArt = ref<string>("");
    const userStore = useUserStore();

    const search = (
      str: string,
      articlesPrev: IArticle[],
      limit: number,
      skip: number
    ) => {
      loadingStore.setLoadingArticle(true);
      strSaved.value = str;
      const tags = str.length === 0 ? [] : str.split(" ");
      getArticles(tags, limit, skip)
        .then((arts: IArticle[]) => {
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
        articles.value as IArticle[],
        limit.value,
        skip.value
      );
    };

    const searchInput = (str: string) => {
      if (strSaved.value === str) return;
      articles.value = [];
      skip.value = 0;
      end.value = false;
      search(str, articles.value as IArticle[], limit.value, skip.value);
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

    const handleEdit = (id: string) => {
      userStore.saveArticle(id);
      router.push("/form");
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
              slicedArticles as IArticle[],
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
      handleEdit,
      handleCloseModal,
      handleAcceptModal,
    };
  },
  mounted() {
    this.loadingStore.setLoadingArticle(true);
    this.search("", this.articles as IArticle[], this.limit, this.skip);
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.bodyContent
  display flex
  gap 20px
  align-content center
  justify-content center
  align-items stretch
  flex-wrap wrap
  &>div
    flex-basis 400px
.loading
  display flex
  align-items center
  justify-content center
.bodyBottom
  display flex
  justify-content center
</style>
