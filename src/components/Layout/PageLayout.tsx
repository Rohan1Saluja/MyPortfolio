import Header from "./Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: any;
}

const PageLayout = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-full h-[100dvh] overflow-auto">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
