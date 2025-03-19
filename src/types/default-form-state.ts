export type DefaultFormState = {
  success: boolean;
  errors: { [key: string]: string[] } | null;
  message?: string | null;
};
