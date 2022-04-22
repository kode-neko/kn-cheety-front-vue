<template lang="pug">
div(:class="$style.collection")
  BtnIcon(type="b", size="sm", label="crear", :icon="['fas', 'circle-plus']")
  BtnIcon(type="b", size="md", label="crear", :icon="['fas', 'circle-plus']")

div(:class="[$style.box]")
  BtnIcon(type="a", size="sm", label="crear", :icon="['fas', 'circle-plus']")
  BtnIcon(type="a", size="md", label="crear", :icon="['fas', 'circle-plus']")
  BtnIconNoBack(type="a", size="sm", label="crear", :icon="['far', 'envelope']")
  BtnIconNoBack(type="b", size="md", label="crear", :icon="['far', 'envelope']")

MenuDesktop
</template>

<script lang="ts">
import MenuDesktop from "../components/menu/MenuDesktop.vue";
import BtnIcon from "../components/btn/BtnIcon.vue";
import BtnIconNoBack from "../components/btn/BtnIconNoBack.vue";
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
  },
  props: {
    msg: String,
    msg02: String,
  },
  setup(props, { emit }) {
    const model = ref<ModelHome>({ value01: "test", tagList: [] });
    return {
      model,
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
</style>
