<template lang="pug">
img(:class="$style.spinner", src="../assets/spinner.png")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.spinner
  width icon-lg
</style>
