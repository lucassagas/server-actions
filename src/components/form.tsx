import { createUserAction } from "@/actions/create-user-action";
import { initialFormState } from "@/utils/initial-form-state";
import { useFormState } from "react-dom";

export const Form = () => {
  const [{ errors }, action, isPending] = useFormState(
    createUserAction,
    initialFormState
  );

  return (
    <form
      action={action}
      className="w-[400px] bg-zinc-800 rounded-md p-4 flex flex-col gap-3"
    >
      <input
        className="bg-zinc-700 rounded-md p-2 w-full"
        name="name"
        placeholder="Nome"
      />
      {errors?.name && <span>{errors.name[0]}</span>}
      <input
        className="bg-zinc-700 rounded-md p-2 w-full"
        name="age"
        placeholder="Idade"
      />
      {errors?.age && <span>{errors.age[0]}</span>}
      <button
        className="w-full p-2 bg-zinc-100 text-zinc-900 rounded-md disabled:opacity-50"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
};
