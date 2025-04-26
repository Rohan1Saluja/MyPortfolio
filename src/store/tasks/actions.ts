import { Task, TaskActionTypes } from "./types";

export const addTask = (task: Task) => (
  console.log("Task - ", task),
  {
    type: TaskActionTypes.ADD_TASK,
    payload: task,
  }
);

export const toggleTaskStatus = (taskId: string) => ({
  type: TaskActionTypes.TOGGLE_TASK_STATUS,
  payload: taskId,
});

export const setCategoryFilter = (category: string | null) => ({
  type: TaskActionTypes.SET_CATEGORY_FILTER,
  payload: category,
});

export const setStatusFilter = (
  status: "all" | "completed" | "incomplete"
) => ({
  type: TaskActionTypes.SET_STATUS_FILTER,
  payload: status,
});

export const undoLastAction = () => ({
  type: TaskActionTypes.UNDO_LAST_ACTION,
});
