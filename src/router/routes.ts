import { FC, lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const EditTaskPage = lazy(() => import("pages/EditTask"));

interface IRoute {
  path: string;
  Element: FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/update/:id",
    Element: EditTaskPage,
  },
];
