import { FC, ReactElement, InputHTMLAttributes } from "react";

import { TaskStatus } from "types";

interface IStatusSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  value: TaskStatus;
}

export const StatusSelect: FC<IStatusSelectProps> = ({
  className,
  ...restProps
}): ReactElement => {
  return (
    <select
      className={`w-full h-10 bg-grey-100 text-sm text-dark placeholder:text-sm placeholder:text-grey-200 py-3 px-3 border-b focus:border border-grey-200 rounded-t-sm transition-all ease-in-out duration-150 ${className}`}
      {...restProps}
    >
      <option
        className="bg-light selection:bg-primary text-dark"
        value={TaskStatus.ToDo}
      >
        ToDo
      </option>
      <option
        className="bg-light selection:bg-primary text-dark"
        value={TaskStatus.InProgress}
      >
        In Progress
      </option>
      <option
        className="bg-light selection:bg-primary text-dark"
        value={TaskStatus.Done}
      >
        Done
      </option>
    </select>
  );
};
