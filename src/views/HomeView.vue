<script setup lang="ts">
import SquareIcon from "../components/SquareIcon.vue";
</script>

<template lang="pug">
main(:class="$style.collection")
  SquareIcon(:icon="['fab', 'twitter']")
  font-awesome-icon.icon-md(:icon="['fa', 'circle-xmark']")
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
</style>
