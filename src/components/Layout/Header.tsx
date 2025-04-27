import { useNavigate } from "react-router-dom";
import MyLogo from "../../assets/logos/MyLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const tabs = [
    { name: "Color Game", route: "/color-game" },
    { name: "Data Muse", route: "/datamuse" },
    { name: "Point Board", route: "/point-board" },
    { name: "Tasks", route: "/tasks" },
    { name: "User Form", route: "/form" },
  ];
  return (
    <header className="flex items-center justify-between gap-4 w-full h-[8dvh] shadow-sm px-2 overflow-x-hidden">
      <img
        src={MyLogo}
        alt=""
        className="rounded-full w-10 h-10 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex items-center gap-4">
        {tabs.map((tab: any, index: number) => (
          <span
            key={`${tab.name}-${index}`}
            className="rounded-xl shadow-sm bg-gray-600/20 hover:bg-gray-600/40 transition-all delay-100 shadow-gray-800 px-3 py-2 active:translate-y-0.5 hover:cursor-pointer"
            onClick={() => navigate(tab.route)}
          >
            {tab.name}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
