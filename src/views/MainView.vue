<template lang="pug">
.cont(:class="$style.cont")
  div(:class="[$style.top, 'desktop']")
    MenuDesktopVue
  div(:class="[$style.bottom, 'mobile']")
    MenuMobileVue
  div(:class="$style.body")
  div(:class="$style.bottom")
    FooterMainVue(:credentials="credentials")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuDesktopVue from "@/components/menu/MenuDesktop.vue";
import MenuMobileVue from "@/components/menu/MenuMobile.vue";
import FooterMainVue from "@/components/FooterMain.vue";
import { credentials } from "@/globals";
import { getArticles } from "@/api/index";

export default defineComponent({
  components: { MenuDesktopVue, MenuMobileVue, FooterMainVue },
  setup() {
    return { credentials };
  },
  mounted() {
    getArticles([])
      .then((arts) => console.log(arts))
      .catch((err) => console.error(err));
  },
});
</script>

<style lang="stylus" module>
.cont
  display flex
  flex-direction column
  justify-content space-between
.body
  flex-basis calc(100vh - 148px)
</style>
