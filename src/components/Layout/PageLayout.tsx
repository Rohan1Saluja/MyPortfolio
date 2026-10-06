import { useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

interface Props {
  children?: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-dvh w-full overflow-x-clip bg-page text-ink">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
