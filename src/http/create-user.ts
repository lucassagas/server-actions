import { api } from "@/services/api";
import { CreateUserProps } from "@/types/create-user";

export const createUser = async (formData: CreateUserProps) => {
  const { data } = await api.post("/users", formData);

  return data;
};
