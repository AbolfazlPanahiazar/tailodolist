import { FC, ReactElement } from "react";
import { PencilIcon } from "@heroicons/react/solid";

import { TextInput, TextArea, PrimaryButton } from "Components/common";

interface ICreateTaskFormProps {}

export const CreateTaskForm: FC<ICreateTaskFormProps> = (): ReactElement => {
  return (
    <form className="px-7 pb-4">
      <TextInput placeholder="Title" className="mb-3" />
      <TextArea placeholder="Description" />
      <PrimaryButton icon={<PencilIcon className="w-5" />}>Add</PrimaryButton>
    </form>
  );
};
