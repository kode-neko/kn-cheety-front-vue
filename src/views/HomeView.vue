<template lang="pug">
div(:class="$style.collection")
  SquareIcon(:icon="['fab', 'twitter']")
  font-awesome-icon.icon-md(:icon="['fa', 'circle-xmark']")
  SwVisualMode(
    :valLeft="'moon'",
    :valRight="'sun'",
    :iconLeft="['fa', 'sun']",
    :iconRight="['far', 'moon']",
    @toggle="(side) => { msg2 = side; }"
  )
  p {{ msg02 }}

div(:class="[$style.box]")
  TagInfo(label="docker", type="b", :isDeletable="false")
  TagInfo(
    label="container",
    type="b",
    :isDeletable="true",
    @delete="msg = 'patatas'"
  )
  BtnIcon(label="Delete", :icon="['fas', 'circle-plus']", size="sm", type="a")
  BtnIcon(label="Delete", :icon="['fa', 'circle-xmark']", size="md", type="b")
  BtnWide(label="Login", :icon="['fa', 'circle-xmark']", size="sm", type="a")
  BtnWide(label="Entrar", :icon="['fa', 'circle-xmark']", size="md", type="b")
  BtnSingleIcon(:icon="['fas', 'trash-can']", type="b")
  SwTypeForm(
    :valLeft="'left'",
    :valRight="'right'",
    :labelLeft="'left'",
    :labelRight="'right'",
    @toggle="(side) => { msg = side; }"
  )
  p {{ msg }}
  InputReseteable(v-model="model.value01", placeholder="Patatas fritas verdes")
  p {{ model.value01 }}
  InputTagList(v-model="model.tagList", placeholder="Insert tag name and press enter")
</template>

<script lang="ts">
import SquareIcon from "../components/SquareIcon.vue";
import TagInfo from "../components/TagInfo.vue";
import BtnIcon from "../components/BtnIcon.vue";
import BtnWide from "../components/BtnWide.vue";
import BtnSingleIcon from "../components/BtnSingleIcon.vue";
import SwTypeForm from "../components/sw/SwTypeForm.vue";
import SwVisualMode from "../components/sw/SwVisualMode.vue";
import InputReseteable from "../components/InputReseteable.vue";
import InputTagList from "../components/InputTagList.vue";
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
    SquareIcon,
    TagInfo,
    BtnIcon,
    BtnWide,
    BtnSingleIcon,
    SwTypeForm,
    SwVisualMode,
    InputReseteable,
    InputTagList,
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
