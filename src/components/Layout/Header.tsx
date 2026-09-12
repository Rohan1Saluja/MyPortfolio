import { useNavigate, useLocation } from "react-router-dom";
import MyLogo from "../../assets/logos/MyLogo.png";
import CustomButton from "../UI/CustomButton";
import { AiOutlineDownload } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [{ name: "Community", route: "/community" }];

  const handleScroll = (section: string) => {
    const folioSection = document.querySelector(section);
    if (folioSection) {
      setTimeout(() => {
        folioSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="flex items-center justify-between gap-4 w-full h-[8dvh] shadow-sm px-2 overflow-x-hidden">
      <img
        src={MyLogo}
        alt=""
        className="rounded-full w-10 h-10 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex items-center gap-2 sm:gap-4">
        {tabs.map((tab: any, index: number) => (
          <span
            key={`${tab.name}-${index}`}
            className="shrink-0 whitespace-nowrap rounded-xl px-2 py-2 text-xs text-text-200 shadow-sm transition-all delay-100 hover:cursor-pointer hover:text-text-100 active:translate-y-0.5 sm:px-3 sm:text-base"
            onClick={() => navigate(tab.route)}
          >
            {tab.name}
          </span>
        ))}

        {location.pathname === "/" && (
          <span
            className="shrink-0 whitespace-nowrap rounded-xl px-2 py-2 text-xs text-text-200 shadow-sm transition-all delay-100 hover:cursor-pointer hover:text-text-100 active:translate-y-0.5 sm:px-3 sm:text-base"
            onClick={() => handleScroll("#contact")}
          >
            Get In Touch
          </span>
        )}

        <CustomButton
          size="small"
          className="!mx-1 shrink-0 whitespace-nowrap sm:!mx-2"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1C9a5USWsB-XukHan4Ja3LQZnhg9KqcLM/view?usp=drive_link",
              "_blank",
            )
          }
        >
          <AiOutlineDownload className="mr-1" />
          Resume
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
