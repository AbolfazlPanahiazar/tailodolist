import { FC, lazy } from "react";

const TasksListPage = lazy(() => import("pages/TasksList"));
const EditTaskPage = lazy(() => import("pages/EditTask"));

interface IRoute {
  path: string;
  Element: FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    Element: TasksListPage,
  },
  {
    path: "/update/:id",
    Element: EditTaskPage,
  },
];
