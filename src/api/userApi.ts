import { apiUrlList } from "@/globals";
import type { AuthLoginRespons } from "@/model";

function getUser(name: string, pass: string): Promise<AuthLoginRespons> {
  const credentials64 = btoa(`${name}:${pass}`);
  return fetch(`${import.meta.env.VITE_API_URL}${apiUrlList.login}`, {
    method: "PUT",
    headers: { Authorization: `Basic ${credentials64}` },
    body: JSON.stringify({ name, pass }),
  })
    .then((data) => data.json())
    .then((data) => data)
    .catch((err) => err);
}

export { getUser };
