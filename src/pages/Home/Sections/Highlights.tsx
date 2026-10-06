import Container from "../Components/Layout/Container";
import SectionHeader from "../Components/Layout/SectionHeader";
import { impact } from "../utils";

const Highlights = () => {
  const [primaryImpact, ...supportingImpact] = impact;

  return (
    <section id="highlights" className="section-space border-t border-border/70">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Production impact"
          title="Evidence measured beyond commits."
          description="A few numbers from products and systems I have helped build, operate, and scale."
        />

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pt-14">
          <div>
            <p className="text-[clamp(4.5rem,10vw,8.5rem)] font-medium leading-none tracking-[-0.07em] text-primary">
              {primaryImpact.value}
            </p>
            <h3 className="mt-5 max-w-sm text-xl font-medium tracking-tight text-ink sm:text-2xl">
              {primaryImpact.label}
            </h3>
            <p className="mt-3 max-w-sm leading-7 text-ink-secondary">
              {primaryImpact.description}
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {supportingImpact.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 py-6 sm:grid-cols-[8rem_1fr] sm:items-start sm:gap-8"
              >
                <p className="text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl">
                  {item.value}
                </p>

                <div>
                  <h3 className="font-medium text-ink">{item.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Highlights;
