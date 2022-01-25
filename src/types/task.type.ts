import { TaskStatus } from "types";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
