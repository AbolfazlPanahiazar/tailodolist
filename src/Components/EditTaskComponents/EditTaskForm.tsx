import { FC, ReactElement } from "react";
import { PencilIcon } from "@heroicons/react/solid";

import {
  TextInput,
  TextArea,
  PrimaryButton,
  SecondaryButton,
} from "Components/common";
import { StatusSelect } from "Components/EditTaskComponents";

interface IEditTaskFormProps {}

export const EditTaskForm: FC<IEditTaskFormProps> = (): ReactElement => {
  return (
    <form className="w-full h-full flex flex-col px-7 pb-4">
      <TextInput placeholder="Title" />
      <TextArea placeholder="Description" className="mt-3 flex-grow" />
      <StatusSelect value="Done" className="mt-3" />
      <div className="w-full grid grid-cols-2 gap-2 mt-3">
        <PrimaryButton icon={<PencilIcon className="w-5" />}>Add</PrimaryButton>
        <SecondaryButton>Cancell</SecondaryButton>
      </div>
    </form>
  );
};
