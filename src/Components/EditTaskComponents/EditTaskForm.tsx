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
import { ITask, TaskStatus } from "types";

interface IEditTaskFormProps {
  task: ITask;
  onSubmit: SubmitHandler<ITask>;
}

export const EditTaskForm: FC<IEditTaskFormProps> = ({
  onSubmit,
  task,
}): ReactElement => {
  const { register, handleSubmit, watch, setValue } = useForm<ITask>({
    defaultValues: task,
  });

  const taskStatus = watch("status");

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
      <StatusSelect
        value={taskStatus}
        onChange={(e) => setValue("status", e.target.value as TaskStatus)}
        className="mt-3"
      />
      <div className="w-full grid grid-cols-2 gap-2 mt-3">
        <PrimaryButton icon={<PencilAltIcon className="w-5" />} type="submit">
          Edit
        </PrimaryButton>
        <SecondaryButton>Cancell</SecondaryButton>
      </div>
    </form>
  );
};
