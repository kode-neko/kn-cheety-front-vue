import type { IArticle, User } from "@/model";
import { defineStore } from "pinia";

interface UserState extends Pick<User, "name" | "email" | "token"> {
  article: IArticle["id"];
  lang: string;
}

const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      name: "",
      email: "",
      token: "",
      article: "",
      lang: "es",
    } as UserState),
  getters: {
    getToken: (state) => state.token,
    getArticle: (state) => state.article,
    getUser: (state) => {
      const { name: user, email, lang, ...rest } = state;
      return { user, email, lang };
    },
  },
  actions: {
    setState(name: string, email: string, token: string) {
      this.name = name;
      this.email = email;
      this.token = token;
      localStorage.setItem("token", token);
    },
    deleteState() {
      this.name = "";
      this.email = "";
      this.token = "";
      localStorage.removeItem("token");
    },
    saveArticle(id: string) {
      this.article = id;
    },
    deleteArticle() {
      this.article = "";
    },
  },
});

export default useUserStore;
