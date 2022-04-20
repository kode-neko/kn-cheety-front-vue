<script setup lang="ts">
import SquareIcon from "../components/SquareIcon.vue";
import TagInfo from "../components/TagInfo.vue";
import BtnIcon from "../components/BtnIcon.vue";
import BtnWide from "../components/BtnWide.vue";
import BtnSingleIcon from "../components/BtnSingleIcon.vue";

const props = defineProps<{
  msg: string;
}>();
</script>

<template lang="pug">
div(:class="$style.collection")
  SquareIcon(:icon="['fab', 'twitter']")
  font-awesome-icon.icon-md(:icon="['fa', 'circle-xmark']")

div(:class="[$style.box]")
  p {{ msg }}
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
</template>

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
