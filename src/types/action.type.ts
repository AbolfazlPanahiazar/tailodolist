import { ITask } from "types";

export enum ActionType {
  Add = "Add",
  Edit = "Edit",
}

export interface IAction {
  type: ActionType;
  payload: ITask;
}
