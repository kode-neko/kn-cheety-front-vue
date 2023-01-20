<template lang="pug">
div(:class="$style.cont")
  LoginMain(@clickLogin="handleLoginBtn", @clickGuest="handleLoginBtn", :user="user")
</template>

<script lang="ts">
import { getUser } from "@/api/userApi";
import router from "@/router";
import useUserStore from "@/stores/user";
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";
import LoginMain from "../components/LoginMain.vue";
import type { AuthLoginRespons, User } from "../model";

export default defineComponent({
  components: { LoginMain },
  setup() {
    const user = ref<User>({
      name: "kodeneko",
      pass: "kodeneko",
      email: "",
      token: "",
    });
    return { user };
  },
  methods: {
    handleLoginBtn(user: Ref<User>) {
      getUser(user.value.name, user.value.pass)
        .then((res: AuthLoginRespons) => {
          const store = useUserStore();
          const { user, accessToken } = res;
          store.setState(user.name, user.email, accessToken);
          router.push("/main");
        })
        .catch((err) => console.error(err));
    },
  },
});
</script>

<style lang="stylus" module>
@import "../assets/base"
.cont
  display flex
  flex-direction column
  align-items center
  padding-top 40px
</style>
