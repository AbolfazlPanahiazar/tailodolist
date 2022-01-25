import { FC } from "react";

import { useGlobalContext } from "hooks";
import { Header, PageTitle } from "Components/common";
import { CreateTaskForm, TasksBoard } from "Components/HomeComponents";

const Home: FC = () => {
  const {
    globalState: { tasks },
    dispatch,
  } = useGlobalContext();

  const createTaskHandler = () => {
    
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <PageTitle>Add a new Task</PageTitle>
      <CreateTaskForm />
      <TasksBoard />
    </div>
  );
};

export default Home;
