import CustomButton from "../../../components/UI/CustomButton";
import { FiArrowRight } from "react-icons/fi";

const Banner: React.FC = () => {
  const handleScroll = () => {
    const folioSection = document.querySelector("#folio");

    if (folioSection) {
      folioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-[78vh] flex items-center px-6 py-16 md:px-10">
      <div className="w-full max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm md:text-base font-medium uppercase tracking-[0.2em] text-primary animate-fade-in">
            Product Engineer · Frontend · Backend · Systems
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-text-200 animate-fade-in">
            I build products that survive contact with the real world.
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-text-300 animate-fade-in-up">
            I'm Rohan Saluja, a software engineer working across web, mobile,
            backend, infrastructure, and product architecture, building systems
            that go from idea to production and scale with the businesses behind
            them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-in-up">
            <CustomButton onClick={handleScroll}>Explore My Work</CustomButton>

            <a
              href="https://github.com/Rohan1Saluja"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-sm font-medium text-text-200 border border-secondary-500/40 rounded-lg 
              hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              View GitHub <FiArrowRight className="mt-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 md:mt-20 pt-7 border-t border-secondary-500/20">
          <p className="text-sm text-text-300">
            Built across commerce, logistics, AI, healthcare, enterprise SaaS,
            media, and developer-facing systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
