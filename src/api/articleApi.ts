import { apiUrlList } from "@/globals";
import type { Article } from "@/model";
import useUserStore from "../stores/user";

function getArticles(
  tags: string[],
  limit: number,
  skip: number
): Promise<Article[]> {
  const store = useUserStore();
  const token = store.getToken;
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.articleFind}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ tags, skip, limit }),
  })
    .then((data) => data.json())
    .then((data) => data);
  // .catch((err) => err);
}

function deleteArticles(id: string): Promise<boolean> {
  const store = useUserStore();
  const token = store.getToken;
  return fetch(
    `${import.meta.env.VITE_API_URL}${apiUrlList.articleDelete}/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((data) => data.json())
    .then((data) => data.affected > 0);
  // .catch((err) => err);
}

export { getArticles, deleteArticles };
