import { createContext, ReactElement, useEffect, useReducer, FC } from "react";
import Reducer from "./reducer";
import { IContext, IGlobalState } from "types";
import { initialState } from "./initialState";
import { LOCAL_PERSIST_KEY } from "constants/variables";

export const globalContext = createContext<IContext>({} as IContext);

const initializeState = (): IGlobalState => {
  if (typeof Storage !== "undefined") {
  } else {
    throw new Error("You need to enable localstorage to run this app.");
  }

  const fromLocalStorage = localStorage.getItem(LOCAL_PERSIST_KEY);
  if (fromLocalStorage) {
    return JSON.parse(fromLocalStorage);
  } else {
    localStorage.setItem(LOCAL_PERSIST_KEY, JSON.stringify(initialState));
    return initialState;
  }
};

const GlobalStore: FC = ({ children }): ReactElement => {
  const [globalState, dispatch] = useReducer(Reducer, initializeState());

  useEffect(() => {
    localStorage.setItem(LOCAL_PERSIST_KEY, JSON.stringify(globalState));
  }, [globalState]);

  return (
    <globalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalStore;
