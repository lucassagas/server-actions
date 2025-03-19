import { api } from "@/services/api";
import { createUserProps } from "@/types/create-user";

export const createUser = async (formData: createUserProps) => {
  const { data } = await api.post("/users", formData);

  return data;
};
