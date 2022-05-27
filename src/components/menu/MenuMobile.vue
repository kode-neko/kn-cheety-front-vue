<template lang="pug">
div(:class="$style.outer")
  div(:class="$style.cont")
    div(:class="$style.left")
      h1 CT
    div(:class="$style.right")
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'magnifying-glass']",
        @click="isVisibleSearch = !isVisibleSearch"
      )
      BtnIconNoBack(type="a", size="md", :icon="['fas', 'circle-plus']")
      BtnIconNoBack(
        type="a",
        size="md",
        :icon="['fas', 'bars']",
        @click="isVisibleMenu = !isVisibleMenu"
      )
  Transition(name="menu")
    div(v-if="isVisibleSearch", :class="$style.searchmenu")
      input(
        placeholder="buscar...",
        v-model="searchValue",
        @keyup.enter="handleSearch"
      )
  Transition(name="menu-bars")
    div(v-if="isVisibleMenu", :class="$style.dropMenu")
      div(:class="$style.a")
        div
          BtnIconNoBack(
            type="c",
            size="sm",
            label="contactar"
            :icon="['far', 'envelope']",
            :class="$style.icon"
            @click="handleClickContact"
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

export default defineComponent({
  components: { BtnIcon, BtnIconNoBack, SwTypeForm, SquareIcon },
  emits: ["search", "contact", "mode"],
  setup(props, { emit }) {
    const isVisibleSearch = ref<boolean>(false);
    const isVisibleMenu = ref<boolean>(false);
    const searchValue = ref<string>("");
    const handleClickContact = () => {
      emit("contact")
    }
    const handleClickSocial = (social: Social) => {
      window.open(social.url);
    };
    const handleSearch = () => {
      emit("search", searchValue.value);
      isVisibleSearch.value = false;
    };
    return {
      isVisibleSearch,
      isVisibleMenu,
      searchValue,
      handleClickContact,
      handleClickSocial,
      handleSearch,
      socialList,
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
    margin-top 40px
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
.dropMenu
  z-index 2
  border 1px solid color-dark
  .a
    background-color color-main
    padding pd-md
    border 1px solid color-dark
  .b
    background-color color-second
    padding pd-md
    border 1px solid color-dark
    .iconList
      display flex
      gap pd-sm

</style>
