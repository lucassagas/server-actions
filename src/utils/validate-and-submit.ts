import { ZodSchema } from "zod";

export async function validateAndSubmit<T>(
  formData: FormData,
  schema: ZodSchema<T>,
  submitFn: (data: T) => Promise<void>,
  successMessage?: string
) {
  const result = schema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: null,
    };
  }

  try {
    await submitFn(result.data);
  } catch (error) {
    console.error(error);
    return { success: false, errors: null, message: null };
  }

  return { success: true, errors: null, message: successMessage };
}
