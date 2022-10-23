<template lang="pug">
div(:class="$style.cont") 
  div(:class="$style.left")  {{credentials}}
  div(:class="$style.right") 
    div(@click="() => changeLang('es')", :class="{[$style.btn]: true, [$style.enabled]: lang === 'en', [$style.disabled]: lang !== 'en'}") EN 
    div(@click="() => changeLang('en')", :class="{[$style.btn]: true, [$style.enabled]: lang === 'es', [$style.disabled]: lang !== 'es'}") ES
    div(:class="$style.globe") 
      font-awesome-icon(icon="fa-globe")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    credentials: {
      type: String,
      default: "2022",
    },
  },
  setup() {
    const lang = ref<string>("es");
    const changeLang = (selected: string) => {
      lang.value = selected;
    };
    return { lang, changeLang };
  },
});
</script>

<style lang="stylus" module>
@import '../assets/base'
.cont
  display flex
  justify-content space-between
  background-color color-dark
  padding pd-md
  color color-light
.right
  display flex
  justify-content end
  align-items center
  gap pd-xs
  .btn
    transition color 1s
    &:hover
      cursor pointer
  .disabled
    color color-main
  .globe
    font-size icon-sm
    margin-left pd-xs
</style>
