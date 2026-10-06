import MyPixarArt from "../../../assets/logos/PixarArt.jpg";
import { Instagram, LinkedIn, X } from "../../../assets/icons";
import Container from "../Components/Layout/Container";
import SectionHeader from "../Components/Layout/SectionHeader";
import TypewriterText from "../Components/Layout/TypewriterText";

const About: React.FC = () => {
  return (
    <section id="about" className="section-space scroll-mt-20 border-t border-border/70">
      <Container>
        <SectionHeader
          index="04"
          eyebrow="About"
          title="I like owning the messy middle between an idea and production."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
          <div>
            <div className="max-w-sm overflow-hidden bg-surface">
              <img
                src={MyPixarArt}
                alt="Stylized portrait of Rohan Saluja"
                className="aspect-square w-full object-cover object-top"
                width="480"
                height="480"
                loading="lazy"
              />
            </div>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/rohansaluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
              <a
                href="https://twitter.com/rohan1saluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-primary"
                aria-label="X"
              >
                <X />
              </a>
              <a
                href="https://www.instagram.com/rohansalujamusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-ink sm:text-3xl">
              I&apos;m Rohan, a software engineer who enjoys working across
              product, frontend, backend, mobile, and infrastructure.
            </p>

            <div className="mt-8 space-y-6 text-base leading-8 text-ink-secondary sm:text-lg">
              <p>
                Over the last few years, I&apos;ve worked in startup
                environments where building a product often meant moving
                between product decisions, user experiences, APIs, data models,
                deployments, debugging, and production operations.
              </p>

              <p>
                My work has spanned quick-commerce, logistics, AI-powered
                healthcare, enterprise software, 3D experiences, media
                platforms, and cloud infrastructure.
              </p>

              <p>
                What interests me most is engineering that creates leverage:
                helping teams ship faster, making systems more reliable,
                reducing operational complexity, and building experiences that
                genuinely improve the product behind them.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-border pt-7 sm:grid-cols-[10rem_1fr]">
              <p className="eyebrow min-h-[0.8rem] pt-1 text-ink-muted"><TypewriterText text="Outside engineering" speedMs={40} /></p>
              <p className="leading-7 text-ink-secondary">
                Music, technology communities, and meeting people who enjoy
                building ambitious things.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
