import { Dispatch } from "react";

import { IGlobalState, IAction } from "types";

export interface IContext {
  globalState: IGlobalState;
  dispatch: Dispatch<IAction>;
}
