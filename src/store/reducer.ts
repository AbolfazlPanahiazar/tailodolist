import { IGlobalState, IAction, ActionType } from "types";

const Reducer = (state: IGlobalState, action: IAction): IGlobalState => {
  const { type, payload } = action;
  const { tasks } = state;

  switch (type) {
    case ActionType.Add:
      return {
        tasks: [payload, ...tasks],
      };
    case ActionType.Edit:
      return {
        tasks: tasks.map((task) => (task.id !== payload.id ? task : payload)),
      };
    default:
      return state;
  }
};

export default Reducer;
