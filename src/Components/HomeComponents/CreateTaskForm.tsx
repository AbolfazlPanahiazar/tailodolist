import { FC, ReactElement } from "react";
import { PencilIcon } from "@heroicons/react/solid";

import { TextInput, TextArea, PrimaryButton } from "Components/common";

interface ICreateTaskFormProps {}

export const CreateTaskForm: FC<ICreateTaskFormProps> = (): ReactElement => {
  return (
    <form className="px-7 pb-4">
      <TextInput placeholder="Title" />
      <TextArea placeholder="Description" className="mt-3" />
      <PrimaryButton className="mt-2" icon={<PencilIcon className="w-4" />}>
        Add
      </PrimaryButton>
    </form>
  );
};
