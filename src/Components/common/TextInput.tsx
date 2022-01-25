import { FC, ReactElement, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

export const TextInput: FC<ITextInputProps> = ({
  className,
  register,
  ...restProps
}): ReactElement => {
  return (
    <input
      className={`w-full h-9 bg-grey-100 text-sm text-dark placeholder:text-sm placeholder:text-grey-200 py-3 px-3 border-b focus:border border-grey-200 rounded-t-sm transition-all ease-in-out duration-150 ${className}`}
      type="text"
      {...register}
      {...restProps}
    />
  );
};
