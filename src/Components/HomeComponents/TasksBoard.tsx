import { FC, ReactElement } from "react";

import { ITask } from "types";
import { TaskCard } from "Components/HomeComponents";

interface ITasksBoardProps {
  tasks: ITask[];
}

export const TasksBoard: FC<ITasksBoardProps> = ({ tasks }): ReactElement => {
  return (
    <div className="w-full flex-grow flex flex-col rounded-t-2xl bg-primary">
      <div className="px-7 py-3">
        <span className="text-light text-lg font-bold">Tasks</span>
      </div>
      <div className="w-full flex-grow rounded-t-2xl bg-secondary px-7 py-3">
        <div className="w-full grid grid-cols-2 gap-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
