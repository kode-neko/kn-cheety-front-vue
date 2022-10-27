<template lang="pug">
div(:class="$style.cont")
  OneToast(
    v-for="msg in msgList", 
    :icon="msg.icon", 
    :msg="msg.msg"
  )
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import type { PropType } from "vue";
import OneToast from "./OneToast.vue";
import type ToastInfo from "./ToastInfo";

export default defineComponent({
  components: { OneToast },
  props: {
    msgList: Object as PropType<Array<ToastInfo>>,
  },
  setup(props) {
    /*
    watch(() => props.msgList, (new, prev) => {
      
    })
    */
    return {};
  },
});
</script>

<style lang="stylus" module>
@import "../../assets/base"

.cont
  position absolute
  right 0
  top 300px
</style>
