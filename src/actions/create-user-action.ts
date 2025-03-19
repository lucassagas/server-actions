import { createUserSchema } from "@/schemas/create-user-schema";
import { DefaultFormState } from "@/types/default-form-state";
import { createUser } from "@/http/create-user";
import { toast } from "react-toastify";
import { validateAndSubmit } from "@/utils/validate-and-submit";

export async function createUserAction(
  _: DefaultFormState,
  formData: FormData
): Promise<DefaultFormState> {
  const response = await validateAndSubmit(
    formData,
    createUserSchema,
    createUser
  );

  if (response.success)
    toast("Usuário criado com sucesso", { type: "success" });

  return response;
}
