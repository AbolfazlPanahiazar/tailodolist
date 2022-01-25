import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { Header, PageTitle } from "Components/common";
import { EditTaskForm } from "Components/EditTaskComponents";
import { ITask } from "types";

const EditTask: FC = () => {
  const editTaskHandler: SubmitHandler<ITask> = (updatedTask) => {};

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <PageTitle>Edit Task</PageTitle>
      <EditTaskForm onSubmit={editTaskHandler} />
    </div>
  );
};

export default EditTask;
