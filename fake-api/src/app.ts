import { Elysia } from "elysia";
import { usersRoutes } from "./routes/usersRoutes";
import cors from "@elysiajs/cors";

const app = new Elysia();

app.use(usersRoutes);
app.use(cors());

export { app };
