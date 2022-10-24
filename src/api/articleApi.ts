import { apiUrlList } from "@/globals";
import type { AuthLoginRespons } from "@/model";
import useUserStore from "../stores/user";

function getArticles(tags: string[]): Promise<AuthLoginRespons> {
  const store = useUserStore();
  const token = store.getToken;
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.articleFind}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ tags }),
  })
    .then((data) => data.json())
    .then((data) => data)
    .catch((err) => err);
}

export { getArticles };
