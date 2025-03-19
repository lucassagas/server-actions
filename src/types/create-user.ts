import { createUserSchema } from "@/schemas/create-user-schema";
import { z } from "zod";

export type createUserProps = z.infer<typeof createUserSchema>;
