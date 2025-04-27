import { createBrowserRouter } from "react-router-dom";
import UserForm from "./pages/UserForm/UserForm";
import App from "./App";
import Home from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";
import AddTask from "./pages/Tasks/AddTask/AddTask";
import ColorGame from "./pages/ColorGame/ColorGame";
import DataMuse from "./pages/DataMuse/DataMuse";
import PointBoard from "./pages/PointBoard/PointBoard";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/color-game",
        element: <ColorGame />,
      },
      {
        path: "/datamuse",
        element: <DataMuse />,
      },
      {
        path: "/point-board",
        element: <PointBoard />,
      },
      {
        path: "/tasks",
        children: [
          {
            path: "",
            element: <Tasks />,
          },
          {
            path: "add",
            element: <AddTask />,
          },
        ],
      },
      {
        path: "/form",
        element: <UserForm />,
      },
    ],
  },
]);

export default Routes;
