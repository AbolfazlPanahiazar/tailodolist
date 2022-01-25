import { FC, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PencilIcon } from "@heroicons/react/solid";

import { TextInput, TextArea, PrimaryButton } from "Components/common";

export interface ICreateTaskFormFields {
  title: string;
  description: string;
}

interface ICreateTaskFormProps {
  onSubmit: SubmitHandler<ICreateTaskFormFields>;
}

export const CreateTaskForm: FC<ICreateTaskFormProps> = ({
  onSubmit,
}): ReactElement => {
  const { register, handleSubmit } = useForm<ICreateTaskFormFields>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-7 pb-4">
      <TextInput placeholder="Title" register={register("title")} />
      <TextArea
        placeholder="Description"
        className="mt-3"
        register={register("description")}
      />
      <PrimaryButton
        className="mt-2"
        icon={<PencilIcon className="w-4" />}
        type="submit"
      >
        Add
      </PrimaryButton>
    </form>
  );
};
