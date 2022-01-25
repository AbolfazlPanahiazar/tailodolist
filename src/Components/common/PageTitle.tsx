import { FC } from "react";

interface IPageTitleProps {
  children: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ children }) => {
  return (
    <div className="px-7 py-5">
      <span className="text-xl text-dark font-bold">{children}</span>
    </div>
  );
};
