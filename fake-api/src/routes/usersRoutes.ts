import { Elysia } from "elysia";
import { users } from "../schemas/user";

const usersRoutes = new Elysia();

usersRoutes.get("users", ({ set }) => {
  set.status = 200;

  return { users };
});

usersRoutes.post("users", ({ set }) => {
  set.status = 201;
});

export { usersRoutes };
