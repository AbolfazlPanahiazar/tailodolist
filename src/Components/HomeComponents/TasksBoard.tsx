import { FC, ReactElement } from "react";

import { TaskCard } from "Components/HomeComponents";

interface ITasksBoardProps {}

export const TasksBoard: FC<ITasksBoardProps> = (): ReactElement => {
  return (
    <div className="w-full flex-grow flex flex-col rounded-t-2xl bg-primary">
      <div className="px-7 py-3">
        <span className="text-light text-lg font-bold">Tasks</span>
      </div>
      <div className="w-full flex-grow grid grid-cols-2 gap-2 rounded-t-2xl bg-secondary px-7 py-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};
