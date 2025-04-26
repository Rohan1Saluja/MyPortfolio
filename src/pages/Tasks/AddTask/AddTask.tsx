import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { addTask } from "../../../store/tasks";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddTask: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [taskState, dispatchAction] = React.useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "SET_TASK":
          return { ...state, task: action.payload };
        case "SET_CATEGORY":
          return { ...state, category: action.payload };
        default:
          return state;
      }
    },
    { task: "", category: null }
  );

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskState.task.trim() || !taskState.category.trim()) {
      alert("Please fill out the details");
      return;
    }

    dispatch(addTask({ ...taskState, id: uuidv4(), completed: false }));
    handleClose();
  };

  return (
    <section className="p-3">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-200 shadow-sm text-gray-800 p-2">
        <h3 className="text-xl font-semibold">Add Task</h3>
        <form onSubmit={handleSubmit} className="space-x-3 flex flex-col gap-2">
          <TextField
            label="Enter Task"
            onChange={(event) =>
              dispatchAction({ type: "SET_TASK", payload: event.target.value })
            }
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel id="select-category">Category</InputLabel>
            <Select
              id="select-box-category"
              labelId="select-category"
              value={taskState.category || ""}
              onChange={(event) =>
                dispatchAction({
                  type: "SET_CATEGORY",
                  payload: event.target.value,
                })
              }
              label="Category"
            >
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Urgent">Urgent</MenuItem>
            </Select>
          </FormControl>

          <div className="flex items-center justify-center gap-2 mt-auto self-stretch">
            <button
              className="rounded-xl border-gray-700 shadow-sm w-max text-gray-800 px-4 py-2 hover:cursor-pointer hover:text-gray-600"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="rounded-xl text-white bg-gray-700 border-gray-700 shadow-sm w-max px-4 py-2 hover:cursor-pointer
             hover:bg-gray-600"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
