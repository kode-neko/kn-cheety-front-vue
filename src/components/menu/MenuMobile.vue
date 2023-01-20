<template lang="pug">
div(:class="$style.outer")
  div(:class="$style.cont")
    div(:class="$style.left")
      router-link(to="/main")
        h1 CT
    div(:class="$style.right")
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'magnifying-glass']",
        @click="handleClickSearch"
      )
      BtnIconNoBack(
        type="a", 
        size="md", 
        :icon="['fas', 'circle-plus']" 
        @click="handleNewArticle"
      )
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'bars']",
        @click="handleClickMenu"
      )
  Transition(name="menu")
    div(v-if="isVisibleSearch", :class="$style.searchmenu")
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fa', 'circle-xmark']",
        @click="() => emit('search', '')"
      )
      input(
        placeholder="buscar...",
        v-model="searchValue",
        @keyup.enter="handleSearch"
      )
  Transition(name="menu-bars")
    div(v-if="isVisibleMenu", :class="$style.dropMenu")
      div(:class="[$style.a, $style.cursor]", @click="logout")
        BtnIconNoBack(
          type="c",
          size="sm",
          label="logout",
          :icon="['fas', 'arrow-right-from-bracket']"
          @click="logout"
        )
      div(:class="$style.a")
        SwTypeForm(
          :valLeft="'moon'",
          :valRight="'sun'",
          :labelLeft="'Light'",
          :labelRight="'Dark'"
        )
      div(:class="$style.b")
        div(:class="$style.iconList")
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
import SquareIcon from "../SquareIcon.vue";
import SwTypeForm from "../sw/SwTypeForm.vue";
import router from "@/router";
import useUserStore from "@/stores/user";

export default defineComponent({
  components: { BtnIcon, BtnIconNoBack, SwTypeForm, SquareIcon },
  emits: ["search", "contact", "mode"],
  setup(props, { emit }) {
    const isVisibleSearch = ref<boolean>(false);
    const isVisibleMenu = ref<boolean>(false);
    const searchValue = ref<string>("");
    const handleClickSearch = () => {
      isVisibleMenu.value = false;
      isVisibleSearch.value = !isVisibleSearch.value;
    };
    const handleClickMenu = () => {
      isVisibleSearch.value = false;
      isVisibleMenu.value = !isVisibleMenu.value;
    };
    const handleClickContact = () => {
      emit("contact");
    };
    const handleClickSocial = (social: Social) => {
      window.open(social.url);
    };
    const handleSearch = () => {
      emit("search", searchValue.value);
      isVisibleSearch.value = false;
    };
    const logout = () => {
      const userStore = useUserStore();
      userStore.deleteState();
      router.push("/login");
    };
    const handleNewArticle = () => router.push("/form");
    return {
      isVisibleSearch,
      isVisibleMenu,
      searchValue,
      handleClickSearch,
      handleClickMenu,
      handleClickContact,
      handleClickSocial,
      handleSearch,
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
.dropMenu
  position absolute
  width 100%
  left 0
  z-index 2
  border 1px solid color-dark
  box-sizing border-box
  .cursor
    cursor pointer
  .a
    background-color color-main
    padding pd-md
    border 1px solid color-dark
    box-sizing border-box
  .b
    background-color color-second
    padding pd-md
    border 1px solid color-dark
    .iconList
      display flex
      gap pd-sm
</style>
