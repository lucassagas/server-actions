import { createUserSchema } from "@/schemas/create-user-schema";
import { DefaultFormState } from "@/types/default-form-state";
import { createUser } from "@/http/create-user";
import { toast } from "react-toastify";
import { validateAndSubmit } from "@/utils/validate-and-submit";
import { CreateUserProps } from "@/types/create-user";

export async function createUserAction(
  _: DefaultFormState<CreateUserProps>,
  formData: FormData
): Promise<DefaultFormState<CreateUserProps>> {
  const response = await validateAndSubmit(
    formData,
    createUserSchema,
    createUser
  );

  if (response.success)
    toast("Usuário criado com sucesso", { type: "success" });

  return response;
}
