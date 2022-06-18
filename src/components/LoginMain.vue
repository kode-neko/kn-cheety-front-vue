<template lang="pug">
div(:class="$style.cont")
  h1(:class="$style.title") Cheety
  input(:class="$style.user", v-model="userInserted.username")
  input(:class="$style.pass", type="password", v-model="userInserted.pass")
  BtnWide(label="Login", size="sm", type="a", @click="handleLogin")
  BtnWide(:class="$style.btnGuest", label="Modo Invitado", size="md", type="b", @click="handleGuest")
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { BtnWide } from "../components/btn";
import type { User } from "../model";

export default defineComponent({
  props: {
    user: Object as PropType<User>,
  },
  emit: ["login", "guest"],
  components: {
    BtnWide,
  },
  setup(props, { emit }) {
    const userInserted = ref<User>(props.user);
    const handleLogin = () => {
      emit("login", userInserted);
    };
    const handleGuest = () => {
      emit("guest");
    };
    return {
      handleLogin,
      handleGuest,
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
    max-width 310px
    .title
        font-family 'Bebas Neue'
        font-size 64px
        margin-bottom pd-md
        text-align center
    .btnGuest
        margin-top pd-md
</style>
