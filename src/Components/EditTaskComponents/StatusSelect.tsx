import { FC, ReactElement, InputHTMLAttributes } from "react";

interface IStatusSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  value: "inQA" | "Done" | "ToDo";
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
      <option className="bg-light selection:bg-primary text-dark" value="inQA">
        inQA
      </option>
      <option className="bg-light selection:bg-primary text-dark" value="Done">
        Done
      </option>
      <option className="bg-light selection:bg-primary text-dark" value="ToDo">
        ToDo
      </option>
    </select>
  );
};
