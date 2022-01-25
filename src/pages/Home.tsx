import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { useGlobalContext } from "hooks";
import { Header, PageTitle } from "Components/common";
import {
  CreateTaskForm,
  TasksBoard,
  ICreateTaskFormFields,
} from "Components/HomeComponents";
import { ActionType, ITask, TaskStatus } from "types";
import { idGenerator } from "helpers";

const Home: FC = () => {
  const {
    globalState: { tasks },
    dispatch,
  } = useGlobalContext();

  const createTaskHandler: SubmitHandler<ICreateTaskFormFields> = ({
    title,
    description,
  }) => {
    if (title && description) {
      const newTask: ITask = {
        id: idGenerator(),
        title,
        description,
        status: TaskStatus.ToDo,
      };
      dispatch({ type: ActionType.Add, payload: newTask });
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <PageTitle>Add a new Task</PageTitle>
      <CreateTaskForm onSubmit={createTaskHandler} />
      <TasksBoard tasks={tasks} />
    </div>
  );
};

export default Home;
