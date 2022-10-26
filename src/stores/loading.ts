import { defineStore } from "pinia";

const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    loadingArticle: true,
  }),
  getters: {
    isLoadingArticle: (state) => state.loadingArticle,
  },
  actions: {
    setLoadingArticle(check: boolean) {
      this.loadingArticle = check;
    },
  },
});

export default useLoadingStore;
