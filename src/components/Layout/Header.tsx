import { useLocation, useNavigate } from "react-router-dom";
import MyLogo from "../../assets/logos/MyLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (selector: string) => {
    const scroll = () => {
      document.querySelector(selector)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 120);
      return;
    }

    scroll();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-page/90 backdrop-blur-xl">
      <div className="page-container flex h-[4.5rem] items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group flex min-w-0 items-center gap-3 text-left"
          aria-label="Go to home page"
        >
          <img
            src={MyLogo}
            alt=""
            className="h-8 w-8 rounded-full ring-1 ring-border transition-opacity group-hover:opacity-80"
          />

          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-medium tracking-[-0.01em] text-ink">
              Rohan Saluja
            </span>
            <span className="mt-0.5 block text-[11px] text-ink-muted">
              Software engineer
            </span>
          </span>
        </button>

        <nav
          className="flex items-center gap-4 text-xs font-medium text-ink-secondary sm:gap-6 sm:text-sm"
          aria-label="Primary navigation"
        >
          {location.pathname === "/" && (
            <>
              <button
                type="button"
                onClick={() => scrollToSection("#folio")}
                className="transition-colors hover:text-ink"
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#about")}
                className="hidden transition-colors hover:text-ink sm:inline"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="transition-colors hover:text-ink"
              >
                Contact
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => navigate("/community")}
            className="hidden transition-colors hover:text-ink md:inline"
          >
            Community
          </button>

          <a
            href="https://drive.google.com/file/d/1C9a5USWsB-XukHan4Ja3LQZnhg9KqcLM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border-l border-border pl-4 text-ink transition-colors hover:text-primary sm:pl-6"
          >
            Résumé ↗
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
