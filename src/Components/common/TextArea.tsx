import { FC, ReactElement, InputHTMLAttributes } from "react";

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: FC<ITextAreaProps> = ({
  className,
  ...restProps
}): ReactElement => {
  return (
    <textarea
      className="w-full flex-grow bg-grey-100 text-sm text-dark placeholder:text-sm placeholder:text-grey-200 py-3 px-3 border-b focus:border border-grey-200 rounded-t-sm transition-all ease-in-out duration-150"
      {...restProps}
    ></textarea>
  );
};
