import { app } from "./app";

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

app.listen(5000);
