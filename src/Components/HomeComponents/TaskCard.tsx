import { FC, ReactElement, useCallback } from "react";
import { PencilAltIcon } from "@heroicons/react/solid";

interface ITaskCardProps {}

export const TaskCard: FC<ITaskCardProps> = (): ReactElement => {
  const Chip: FC = useCallback(() => {
    return <div className="bg-primary rounded-2xl px-2 text-light">ToDo</div>;
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-2 bg-light rounded-lg">
      <span className="text-sm text-dark font-bold">Task Title Goes here</span>
      <p className="w-full flex-grow text-dark text-xs mt-2">
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit
      </p>
      <div className="flex justify-between items-center mt-2">
        <Chip />
        <PencilAltIcon className="w-6 text-dark" />
      </div>
    </div>
  );
};
