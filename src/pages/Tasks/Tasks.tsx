import React from "react";
import { AiFillFilter, AiOutlineUndo } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ApplyFilters from "./components/ApplyFilters";
import { toggleTaskStatus, undoLastAction } from "../../store/tasks";
import { useNavigate } from "react-router-dom";

const Tasks: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, filters } = useSelector((state: any) => state.tasks);
  const [openFilters, setOpenFilters] = React.useState(false);

  const filteredTasks = tasks.filter((task: any) => {
    const matchedCategory = filters.category
      ? task.category === filters.category
      : true;
    const matchedStatus =
      filters.status === "all"
        ? true
        : filters.status === "completed"
        ? task.completed
        : !task.completed;

    return matchedCategory && matchedStatus;
  });

  React.useEffect(() => {}, [tasks]);

  const handleToggle = (taskId: string) => {
    dispatch(toggleTaskStatus(taskId));
  };

  return (
    <section className="p-3">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-200 shadow-sm text-gray-800 p-2">
        <span className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Tasks</h1>
          <AiFillFilter
            title="filter"
            className="hover:cursor-pointer"
            onClick={() => setOpenFilters(true)}
          />
          <AiOutlineUndo
            title="undo"
            className="hover:cursor-pointer"
            onClick={() => dispatch(undoLastAction())}
          />
        </span>
        <ul className="w-full flex flex-col items-center gap-2">
          {filteredTasks?.map((task: any, index: number) => (
            <div
              key={task.id}
              className={`border border-gray-400 shadow-lg py-2 px-5 rounded-xl flex justify-between items-center gap-6 min-w-1/2 ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <div>
                <p className="text-lg font-medium">{task.text}</p>
                <p className="text-sm text-gray-500">{task.category}</p>
              </div>
              <button
                onClick={() => handleToggle(task.id)}
                className="text-sm bg-gray-200 w-40 px-3 py-1 rounded-xl hover:cursor-pointer"
              >
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
            </div>
          ))}
        </ul>
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-400">No tasks found.</p>
        )}
        <button
          onClick={() => navigate("add")}
          className="w-max px-3 py-2 bg-gray-700 text-white rounded-xl hover:cursor-pointer hover:bg-gray-600"
        >
          Add Task
        </button>
      </div>
      <ApplyFilters isOpen={openFilters} setIsOpen={setOpenFilters} />
    </section>
  );
};

export default Tasks;
