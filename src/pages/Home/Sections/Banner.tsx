import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "../Components/Layout/Container";
import TypewriterText from "../Components/Layout/TypewriterText";

const Banner: React.FC = () => {
  const handleScroll = () => {
    document.querySelector("#folio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, -8, 0], y: [0, -12, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -12, 8, 0], y: [0, 10, -8, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl sm:h-80 sm:w-80"
      />
      <Container className="flex min-h-[calc(100dvh-4.5rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,0.45fr)] lg:items-end lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-7 text-primary"
            >
              Product engineering · systems · ownership
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="display-title max-w-5xl text-balance text-ink"
            >
              Software engineering from interface to infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="body-large mt-8 max-w-2xl text-ink-secondary"
            >
              I&apos;m Rohan Saluja. I build and operate products across web,
              mobile, backend, infrastructure, and product architecture—from an
              early idea through production scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
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
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="ambient-panel border border-border/80 p-5 backdrop-blur-[2px] sm:p-6 lg:pb-6"
          >
            <div>
              <p className="eyebrow min-h-[0.8rem] text-ink-muted">
                <TypewriterText text="Current focus" delayMs={520} speedMs={55} />
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                Building Calyrn, an independent market research product, while
                continuing to work across production software and systems.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow min-h-[0.8rem] text-ink-muted">
                <TypewriterText
                  text="Experience surface"
                  delayMs={850}
                  speedMs={42}
                />
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                Commerce, logistics, AI, healthcare, enterprise SaaS, media,
                infrastructure, and developer-facing systems.
              </p>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
