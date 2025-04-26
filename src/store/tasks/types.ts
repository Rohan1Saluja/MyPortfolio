export enum TaskActionTypes {
  ADD_TASK = "ADD_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
  SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER",
  SET_STATUS_FILTER = "SET_STATUS_FILTER",
  UNDO_LAST_ACTION = "UNDO_LAST_ACTION",
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: "Work" | "Personal" | "Urgent";
}

export interface TasksState {
  tasks: Task[];
  filters: {
    category: string | null;
    status: "all" | "completed" | "incomplete";
  };
  history: Task[][];
}
