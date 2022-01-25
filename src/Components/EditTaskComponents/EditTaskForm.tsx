import { FC, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PencilAltIcon } from "@heroicons/react/solid";

import {
  TextInput,
  TextArea,
  PrimaryButton,
  SecondaryButton,
} from "Components/common";
import { StatusSelect } from "Components/EditTaskComponents";
import { ITask } from "types";

interface IEditTaskFormProps {
  onSubmit: SubmitHandler<ITask>;
}

export const EditTaskForm: FC<IEditTaskFormProps> = ({
  onSubmit,
}): ReactElement => {
  const { register, handleSubmit } = useForm<ITask>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col px-7 pb-4"
    >
      <TextInput placeholder="Title" register={register("title")} />
      <TextArea
        placeholder="Description"
        className="mt-3 flex-grow"
        register={register("description")}
      />
      <StatusSelect value="Done" className="mt-3" />
      <div className="w-full grid grid-cols-2 gap-2 mt-3">
        <PrimaryButton icon={<PencilAltIcon className="w-5" />} type="submit">
          Edit
        </PrimaryButton>
        <SecondaryButton>Cancell</SecondaryButton>
      </div>
    </form>
  );
};
