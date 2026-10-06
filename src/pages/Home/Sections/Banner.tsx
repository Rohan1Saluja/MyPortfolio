import { FiArrowRight } from "react-icons/fi";
import Container from "../Components/Layout/Container";

const Banner: React.FC = () => {
  const handleScroll = () => {
    document.querySelector("#folio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="border-b border-border/70">
      <Container className="flex min-h-[calc(100dvh-4.5rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,0.45fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow mb-7 text-primary">
              Product engineering · systems · ownership
            </p>

            <h1 className="display-title max-w-5xl text-balance text-ink">
              Software engineering from interface to infrastructure.
            </h1>

            <p className="body-large mt-8 max-w-2xl text-ink-secondary">
              I&apos;m Rohan Saluja. I build and operate products across web,
              mobile, backend, infrastructure, and product architecture—from an
              early idea through production scale.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="button"
                onClick={handleScroll}
                className="group inline-flex items-center gap-2 border-b border-primary/60 pb-1 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Explore selected work
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="https://github.com/Rohan1Saluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-7 lg:pt-0">
            <div>
              <p className="eyebrow text-ink-muted">Current focus</p>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                Building Calyrn, an independent market research product, while
                continuing to work across production software and systems.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow text-ink-muted">Experience surface</p>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                Commerce, logistics, AI, healthcare, enterprise SaaS, media,
                infrastructure, and developer-facing systems.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
