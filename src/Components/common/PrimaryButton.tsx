import { FC, ReactElement, ButtonHTMLAttributes, ReactNode } from "react";

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  children: string;
}

export const PrimaryButton: FC<IPrimaryButtonProps> = ({
  children,
  icon,
  className,
  ...resProps
}): ReactElement => {
  return (
    <button
      className={`w-full bg-primary text-light flex justify-center items-center py-3 rounded-md ${className}`}
      {...resProps}
    >
      {icon}
      <span className="ml-1">{children}</span>
    </button>
  );
};
