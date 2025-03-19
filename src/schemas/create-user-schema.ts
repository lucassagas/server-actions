import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  age: z.string().min(1, { message: "Name is required" }),
});
