import type { User } from "@/model";
import { defineStore } from "pinia";

const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      name: "",
      email: "",
      token: "",
    } as Pick<User, "name" | "email" | "token">),
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
  },
});

export default useUserStore;
