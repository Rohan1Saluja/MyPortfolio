import { Outlet } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/Layout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default App;
