import { FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { useGlobalContext } from "hooks";
import { Header, PageTitle } from "Components/common";
import { EditTaskForm } from "Components/EditTaskComponents";
import { ActionType, ITask, TaskStatus } from "types";
import { idGenerator } from "helpers";

const EditTask: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { globalState, dispatch } = useGlobalContext();

  const editTaskHandler: SubmitHandler<ITask> = (updatedTask) => {
    const { title, description } = updatedTask;
    if (title && description) {
      dispatch({
        type: ActionType.Edit,
        payload: updatedTask,
      });
      navigate("/");
    }
  };

  const currentTask = useCallback((): ITask => {
    if (id) {
      const { tasks } = globalState;
      const task = tasks.find((task) => task.id === id);
      if (task) {
        return task;
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
    return {
      id: idGenerator(),
      title: "",
      description: "",
      status: TaskStatus.ToDo,
    };
  }, [id]);

  return (
    <div className="w-full max-w-lg h-full flex flex-col">
      <Header />
      <PageTitle>Edit Task</PageTitle>
      <EditTaskForm onSubmit={editTaskHandler} task={currentTask()} />
    </div>
  );
};

export default EditTask;
