import LeetCodeActivity from "../Components/LeetCode";
import Container from "../Components/Layout/Container";
import SectionHeader from "../Components/Layout/SectionHeader";
import { capabilities } from "../utils";

const TechStack: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="section-space scroll-mt-20 border-t border-border/70"
    >
      <Container>
        <SectionHeader
          index="03"
          eyebrow="Engineering capabilities"
          title="Depth where the product needs it."
          description="The work moves across interfaces, backend systems, architecture, infrastructure, and applied AI. The emphasis is on choosing the right layer to solve the problem."
        />

        <div className="mt-16 divide-y divide-border border-y border-border lg:ml-[11rem]">
          {capabilities.map((capability, index) => (
            <article
              key={capability.category}
              className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[3rem_14rem_1fr] lg:gap-8"
            >
              <span className="text-xs tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
                {capability.category}
              </h3>

              <div>
                <p className="max-w-2xl leading-7 text-ink-secondary">
                  {capability.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {capability.items.map((item) => (
                    <span key={item} className="text-sm text-ink-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-14 sm:mt-24 sm:pt-16">
          <div className="grid gap-6 lg:grid-cols-[11rem_1fr]">
            <div className="flex items-start gap-3 pt-1 text-ink-muted">
              <span className="text-xs tabular-nums">04</span>
              <span className="eyebrow text-primary">Problem solving</span>
            </div>

            <div className="max-w-3xl">
              <h3 className="text-[clamp(2rem,4.2vw,3.7rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
                LeetCode, as a live engineering signal.
              </h3>

              <p className="body-large mt-5 max-w-2xl text-ink-secondary">
                Beyond product work, I keep a consistent algorithmic practice.
                The profile below is live: solved problems, activity, streak,
                badges, and recent accepted submissions.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:ml-[11rem]">
            <LeetCodeActivity />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
