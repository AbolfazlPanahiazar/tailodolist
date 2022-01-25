import { FC, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";

export const Header: FC = () => {
  const { pathname } = useLocation();

  const breadCrumbHandler = useCallback((): string => {
    if (pathname === "/") {
      return "Home";
    } else {
      return "Edit";
    }
  }, [pathname]);

  return (
    <header className="bg-primary">
      <nav className="text-light text-xl font-bold px-7 py-2">
        <Link to="/">
          <span>Task Management</span>
        </Link>
        <span className="mx-1">{">"}</span>
        <span>{breadCrumbHandler()}</span>
      </nav>
    </header>
  );
};
