import type User from "../User";

interface AuthLoginRespons {
  user: Pick<User, "name" | "email">;
  message: string;
  accessToken: string;
}

export type { AuthLoginRespons };
