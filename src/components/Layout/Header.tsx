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
      <div className="flex items-center gap-4">
        {tabs.map((tab: any, index: number) => (
          <span
            key={`${tab.name}-${index}`}
            className="rounded-xl shadow-sm text-text-200 hover:text-text-100 transition-all delay-100 px-3 py-2 active:translate-y-0.5 hover:cursor-pointer"
            onClick={() => navigate(tab.route)}
          >
            {tab.name}
          </span>
        ))}
        {location.pathname === "/" && (
          <span
            className="rounded-xl shadow-sm text-text-200 hover:text-text-100 transition-all delay-100 px-3 py-2 active:translate-y-0.5 hover:cursor-pointer"
            onClick={() => handleScroll("#contact")}
          >
            Get In Touch
          </span>
        )}
        <CustomButton
          size="small"
          className="!mx-2"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1C9a5USWsB-XukHan4Ja3LQZnhg9KqcLM/view?usp=drive_link",
              "_blank"
            )
          }
        >
          <AiOutlineDownload /> Resume
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
