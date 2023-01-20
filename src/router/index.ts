import useUserStore from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import FormView from "../views/FormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/main",
      name: "main",
      component: MainView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const token = userStore.getToken;
  if (to.name === "login" && token.length !== 0) {
    next({ name: "home" });
  } else if (to.name !== "login" && token.length === 0) {
    next({ name: "login" });
  }
  return next();
});

export default router;
