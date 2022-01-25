import { FC } from "react";

import { Header, PageTitle } from "Components/common";
import { EditTaskForm } from "Components/EditTaskComponents";

const EditTask: FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <PageTitle>Edit Task</PageTitle>
      <EditTaskForm />
    </div>
  );
};

export default EditTask;
