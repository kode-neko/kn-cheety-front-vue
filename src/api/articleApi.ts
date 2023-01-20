import { apiUrlList } from "@/globals";
import type { IArticle } from "@/model";
import { createHeaderToken } from "@/utils";

function getArticles(
  tags: string[],
  limit: number,
  skip: number
): Promise<IArticle[]> {
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.articleFind}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: createHeaderToken(),
    },
    body: JSON.stringify({ tags, skip, limit }),
  })
    .then((data) => data.json())
    .then((data) => data);
}

function getArticle(id: string): Promise<IArticle> {
  return fetch(
    `${import.meta.env.VITE_API_URL}${apiUrlList.articleGet}/${id}`,
    {
      method: "GET",
      headers: { Authorization: createHeaderToken() },
    }
  )
    .then((data) => data.json())
    .then((data) => data);
}

function createArticle(article: IArticle): Promise<IArticle> {
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.articleCreate}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: createHeaderToken(),
    },
    body: JSON.stringify(article),
  })
    .then((data) => data.json())
    .then((data) => data);
}

function updateArticle(article: Partial<IArticle>): Promise<IArticle> {
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.articleUpdate}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: createHeaderToken(),
    },
    body: JSON.stringify(article),
  })
    .then((data) => data.json())
    .then((data) => data);
}

function deleteArticles(id: string): Promise<boolean> {
  return fetch(
    `${import.meta.env.VITE_API_URL}${apiUrlList.articleDelete}/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: createHeaderToken() },
    }
  )
    .then((data) => data.json())
    .then((data) => data.affected > 0);
}

export {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticles,
};
