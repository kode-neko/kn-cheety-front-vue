<template lang="pug">
div(:class="$style.cont")
  h1(:class="$style.title") Cheety
  input(:class="$style.user", v-model="userInserted.name")
  input(:class="$style.pass", type="password", v-model="userInserted.pass")
  BtnWide(label="Login", size="sm", type="a", @click="handleClickLogin")
  BtnWide(:class="$style.btnGuest", label="Modo Invitado", size="md", type="b", @click="handleClickGuest")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import { BtnWide } from "../components/btn";
import type { User } from "../model";

export default defineComponent({
  props: {
    user: { type: Object as PropType<User>, required: true },
  },
  emit: ["clickLogin", "clickGuest"],
  components: {
    BtnWide,
  },
  setup(props, { emit }) {
    const userInserted = ref<User>(props.user);
    const handleClickLogin = () => {
      console.log("handleClickLogin");
      emit("clickLogin", userInserted);
    };
    const handleClickGuest = () => {
      console.log("handleClickLogin");
      emit("clickGuest", userInserted);
    };
    return {
      handleClickLogin,
      handleClickGuest,
      userInserted,
    };
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
    background-color color-dark
    display flex
    flex-direction column
    gap pd-md
    padding pd-md
    border-radius br-md
    width 310px
    .title
        font-family 'Bebas Neue'
        font-size 64px
        margin-bottom pd-md
        text-align center
    .btnGuest
        margin-top pd-md
</style>
