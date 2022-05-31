<template lang="pug">
div(:class="$style.collection")
  BtnIcon(type="b", size="sm", label="crear", :icon="['fas', 'circle-plus']")
  BtnIcon(type="b", size="md", label="crear", :icon="['fas', 'circle-plus']")

div(:class="[$style.box]")
  BtnIcon(type="a", size="sm", label="crear", :icon="['fas', 'circle-plus']")
  BtnIcon(type="a", size="md", label="crear", :icon="['fas', 'circle-plus']")
  BtnIconNoBack(
    type="a",
    size="sm",
    label="crear",
    :icon="['far', 'envelope']"
  )
  BtnIconNoBack(
    type="b",
    size="md",
    label="crear",
    :icon="['far', 'envelope']"
  )

MenuDesktop
MenuMobile

div(:class="$style.fufu")
  BoxBase(title="Un titulo cualquiera", :editable="false")
    div Baltasar

  BoxArticle(
    title="Título",
    content="Esto es una prueba",
    :editable="true",
    :tagList="[ { id: 'docker', label: 'docker' }, { id: 'image', label: 'image' }, ]"
  )

  BoxForm(:article="a", @save="handleSaveForm")

  LoginMain
</template>

<script lang="ts">
import MenuDesktop from "../components/menu/MenuDesktop.vue";
import MenuMobile from "../components/menu/MenuMobile.vue";
import BtnIcon from "../components/btn/BtnIcon.vue";
import BtnIconNoBack from "../components/btn/BtnIconNoBack.vue";
import LoginMain from "../components/LoginMain.vue";
import { Article } from "../model";
import { BoxBase, BoxArticle, BoxForm } from "../boxes";
import { defineComponent, ref } from "vue";

interface Tag {
  id: string;
  label: string;
}

interface ModelHome {
  value01: string;
  tagList: string[];
}

export default defineComponent({
  components: {
    BtnIcon,
    BtnIconNoBack,
    MenuDesktop,
    MenuMobile,
    BoxBase,
    BoxArticle,
    BoxForm,
    LoginMain,
  },
  props: {
    msg: String,
    msg02: String,
  },
  setup(props, { emit }) {
    const model = ref<ModelHome>({ value01: "test", tagList: [] });
    const a = new Article({
      title: "patata",
      body: ["p"],
      tagList: [{ id: "docker", label: "docker" }],
    });
    const handleSaveForm = (article) => {
      console.log("press save");
      console.log(article);
    };
    return {
      model,
      a,
      handleSaveForm,
    };
  },
});
</script>

<style module lang="stylus">
@import "../assets/base"
.collection
  display flex
  padding pd-md
  gap pd-md
  flex-wrap wrap
  background-color color-main
  align-items center

.box
  margin-top pd-lg;
  display flex
  padding pd-md
  gap pd-md
  flex-wrap wrap
  background-color color-dark
  align-items center

.fufu
  padding 40px
  display flex
  flex-direction column
  gap pd-md
</style>
