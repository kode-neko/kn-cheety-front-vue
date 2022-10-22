import type User from "../User";

interface AuthLoginRespons {
  user: Pick<User, "name" | "email">;
  message: string;
  token: string;
}

export type { AuthLoginRespons };
