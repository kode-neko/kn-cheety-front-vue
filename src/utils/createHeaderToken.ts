import useUserStore from "@/stores/user";

function createHeaderToken() {
  const store = useUserStore();
  const token = store.getToken;
  return token ? `Bearer ${token}` : "";
}

export default createHeaderToken;
