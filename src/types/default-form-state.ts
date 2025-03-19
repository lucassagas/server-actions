export type DefaultFormState<TFields> = {
  success: boolean;
  errors: Partial<Record<keyof TFields, string[]>> | null;
  message?: string | null;
};
