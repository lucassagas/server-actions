import { createUserSchema } from "@/schemas/create-user-schema";
import { z } from "zod";

export type CreateUserProps = z.infer<typeof createUserSchema>;
