import { FC, ReactElement, useCallback } from "react";
import { Link } from "react-router-dom";
import { PencilAltIcon } from "@heroicons/react/solid";

import { ITask, TaskStatus } from "types";

interface ITaskCardProps {
  task: ITask;
}

export const TaskCard: FC<ITaskCardProps> = ({ task }): ReactElement => {
  const { id, title, description, status } = task;

  const Chip: FC<{ status: TaskStatus }> = useCallback(({ status }) => {
    return (
      <div className="bg-primary rounded-2xl px-2 text-light">{status}</div>
    );
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-2 bg-light rounded-lg">
      <span className="text-sm text-dark font-bold">{title}</span>
      <p className="w-full flex-grow text-dark text-xs mt-2">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <Chip status={status} />
        <Link to={`/edit/${id}`}>
          <PencilAltIcon className="w-6 text-dark" />
        </Link>
      </div>
    </div>
  );
};
