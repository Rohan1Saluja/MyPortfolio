import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const tabs = [
    { name: "Color Game", route: "/color-game" },
    { name: "Data Muse", route: "/datamuse" },
    { name: "Tasks", route: "/tasks" },
    { name: "About", route: "/about" },
    { name: "User Form", route: "/form" },
  ];
  return (
    <header className="flex items-center justify-center gap-4 w-full h-[8dvh] shadow-sm shadow-gray-600">
      {tabs.map((tab: any, index: number) => (
        <span
          key={`${tab.name}-${index}`}
          className="rounded-xl shadow-sm bg-gray-600/20 hover:bg-gray-600/40 transition-all delay-100 shadow-gray-800 px-3 py-2 active:translate-y-0.5 hover:cursor-pointer"
          onClick={() => navigate(tab.route)}
        >
          {tab.name}
        </span>
      ))}
    </header>
  );
};

export default Header;
