import { FC, ReactElement, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn;
}

export const TextArea: FC<ITextAreaProps> = ({
  className,
  register,
  ...restProps
}): ReactElement => {
  return (
    <textarea
      className={`w-full flex-grow bg-grey-100 text-sm text-dark placeholder:text-sm placeholder:text-grey-200 py-3 px-3 border-b focus:border border-grey-200 rounded-t-sm transition-all ease-in-out duration-150 ${className}`}
      {...register}
      {...restProps}
    ></textarea>
  );
};
