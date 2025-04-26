import { produce } from "immer";
import { Task, TaskActionTypes, TasksState } from "./types";

export const initialState: TasksState = {
  tasks: [],
  filters: { category: null, status: "all" },
  history: [],
};

const MAX_HISTORY_LENGTH = 10;

export const tasks = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case TaskActionTypes.ADD_TASK:
        draft.history.push(draft.tasks.slice());
        if (draft.history.length > MAX_HISTORY_LENGTH) {
          draft.history.shift(); // remove the oldest snapshot
        }
        draft.tasks.push(action.payload);
        break;
      case TaskActionTypes.TOGGLE_TASK_STATUS: {
        draft.history.push(draft.tasks.slice());
        if (draft.history.length > MAX_HISTORY_LENGTH) {
          draft.history.shift(); // remove the oldest snapshot
        }
        draft.tasks = draft.tasks.map((task: Task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
        break;
      }
      case TaskActionTypes.SET_CATEGORY_FILTER:
        draft.filters.category = action.payload;
        break;
      case TaskActionTypes.SET_STATUS_FILTER:
        draft.filters.status = action.payload;
        break;
      case TaskActionTypes.UNDO_LAST_ACTION:
        if (draft.history.length > 0) draft.tasks = draft.history.pop()!;
        break;

      default:
        return state;
    }
  });
