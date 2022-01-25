import { FC, ReactElement, ButtonHTMLAttributes } from "react";

interface ISecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const SecondaryButton: FC<ISecondaryButtonProps> = ({
  children,
  className,
  ...resProps
}): ReactElement => {
  return (
    <button
      className={`w-full text-grey-200 border border-grey-200 flex justify-center items-center py-3 rounded-md ${className}`}
      {...resProps}
    >
      <span>{children}</span>
    </button>
  );
};
