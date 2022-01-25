import { useContext } from "react";

import { IContext } from "types";
import { globalContext } from "store/Store";

export const useGlobalContext = (): IContext => {
  return useContext(globalContext);
};
