<template lang="pug">
div(:class="$style.outer")
  div(:class="$style.cont")
    div(:class="$style.left")
      router-link(to="/main")
        h1 Cheety
      div(:class="$style.ctrls")
        BtnIcon(
          label="Create",
          :icon="['fas', 'circle-plus']",
          size="sm",
          type="a"
          @click="handleNewArticle"
        )
        BtnIconNoBack(
          type="a",
          size="sm",
          :icon="['fas', 'magnifying-glass']",
          label="search",
          @click="isVisibleSearch = !isVisibleSearch"
        )
    div(:class="$style.right")
      BtnIconNoBack(type="a", size="md", :icon="['fas', 'magnifying-lass']")
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'share-nodes']",
        @click="isVisibleSocial = !isVisibleSocial"
      )
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'arrow-right-from-bracket']"
        @click="logout"
      )
      SwTypeForm(
        :valLeft="'moon'",
        :valRight="'sun'",
        :labelLeft="'Light'",
        :labelRight="'Dark'",
        @toggle="(side) => { msg2 = side; }"
      )
  Transition(name="menu")
    div(v-if="isVisibleSearch", :class="$style.searchmenu")
      BtnIconNoBack(
          size="md",
          :icon="['fa', 'circle-xmark']",
          @click="() => handleSearch('')"
        )
      input(
        placeholder="buscar...",
        v-model="searchValue",
        @keyup.enter="() => handleSearch(searchValue)"
      )
  Transition(name="menu")
    div(v-if="isVisibleSocial", :class="$style.socialmenu")
      SquareIcon(
        v-for="social in socialList",
        :key="social.id",
        :icon="social.icon",
        @click="() => handleClickSocial(social)"
      )
</template>

<script lang="ts">
import { Social } from "../../model";
import { socialList } from "../../globals";
import { defineComponent, ref } from "vue";
import { BtnIcon, BtnIconNoBack } from "../btn";
import router from "@/router";
import SquareIcon from "../SquareIcon.vue";
import SwTypeForm from "../sw/SwTypeForm.vue";
import useUserStore from "@/stores/user";

export default defineComponent({
  components: { BtnIcon, BtnIconNoBack, SwTypeForm, SquareIcon },
  emits: ["search"],
  setup(props, { emit }) {
    const searchValue = ref<string>("");
    const handleSearch = (str: string) => {
      if (str.trim() === "") searchValue.value = "";
      const path = router.currentRoute.value.path;
      if (path !== "/main") router.push("/main");
      emit("search", str.trim());
      isVisibleSearch.value = false;
    };
    const handleClickSocial = (social: Social) => {
      window.open(social.url);
    };
    const isVisibleSearch = ref<boolean>(false);
    const isVisibleSocial = ref<boolean>(false);
    const logout = () => {
      const userStore = useUserStore();
      userStore.deleteState();
      router.push("/login");
    };
    const handleNewArticle = () => router.push("/form");
    return {
      searchValue,
      handleSearch,
      handleClickSocial,
      isVisibleSearch,
      isVisibleSocial,
      socialList,
      logout,
      handleNewArticle,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../../assets/base"
.outer
  position relative
.cont
    display flex
    justify-content space-between
    background-color color-dark
    padding pd-md
    box-sizing border-box
    width 100%
    position relative
    z-index 3
    .left
        display flex
        align-items center
        gap pd-md
        h1
            font-family 'Bebas Neue', cursive
            font-size 40px
            color color-light
        .ctrls
            position relative
            display flex
            gap pd-md
    .right
        position relative
        display flex
        gap pd-md
        align-items: center
        .icon
          color color-main
          height icon-md
          width icon-md
          :hover
            color color-light
            cursor pointer
.searchmenu
  position absolute
  left 0
  z-index 1
  width 100%
  height 70px
  background-color color-main
  box-sizing border-box
  padding 0 pd-md
  border 1px solid color-dark
  display flex
  input
    width 100%
    height 100%
    background none
    border none
    font-size 22px
    color color-light
    box-sizing border-box
    &::placeholder
      color color-dark
      font-style italic
    &:focus
      outline none
.socialmenu
  background-color color-second
  position absolute
  right 54px
  z-index 2
  padding pd-md
  display flex
  gap pd-sm
  border-radius 0 0 br-md br-md
</style>
