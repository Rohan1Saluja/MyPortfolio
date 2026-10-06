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

        <div className="mt-14 lg:ml-[11rem]">
          <LeetCodeActivity />
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
