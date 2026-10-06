import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "../Components/Layout/Container";
import SectionHeader from "../Components/Layout/SectionHeader";
import { projects } from "../utils";

const Folio: React.FC = () => {
  const flagshipProjects = projects.slice(0, 3);
  const supportingProjects = projects.slice(3);

  return (
    <section id="folio" className="section-space scroll-mt-20">
      <Container>
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Products that show the range of the engineering."
          description="Independent product work, client delivery, and production systems—presented by ownership and engineering scope rather than a wall of equal cards."
        />

        <div className="mt-16 border-t border-border lg:mt-20">
          {flagshipProjects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid gap-9 border-b border-border py-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20"
              >
                <div
                  className={
                    reverse
                      ? "lg:order-2 lg:col-span-5 lg:col-start-8"
                      : "lg:col-span-5"
                  }
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-muted">
                    <span className="tabular-nums">{project.index}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.type}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.period}</span>
                  </div>

                  <h3 className="mt-5 text-4xl font-medium leading-none tracking-[-0.045em] text-ink sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-primary">
                    {project.role}
                  </p>

                  <p className="mt-7 max-w-xl text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-2 border-t border-border pt-6 sm:grid-cols-2">
                    {project.contributions.map((contribution) => (
                      <p
                        key={contribution}
                        className="text-sm leading-6 text-ink-secondary"
                      >
                        {contribution}
                      </p>
                    ))}
                  </div>

                  {project.metrics.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-medium tracking-tight text-ink">
                            {metric.value}
                          </p>
                          <p className="mt-1 text-xs text-ink-muted">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {(project.liveUrl || project.caseStudyUrl) && (
                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 border-b border-primary/50 pb-1 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                        >
                          Visit product
                          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}

                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          className="group inline-flex items-center gap-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
                        >
                          Engineering story
                          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div
                  className={
                    reverse
                      ? "lg:order-1 lg:col-span-7"
                      : "lg:col-span-7"
                  }
                >
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden border border-border bg-surface"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} product preview`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                      />
                    </a>
                  ) : (
                    <div className="overflow-hidden border border-border bg-surface">
                      <img
                        src={project.image}
                        alt={`${project.title} product preview`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {supportingProjects.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
              <div>
                <p className="eyebrow text-primary">Additional experience</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  Supporting production work.
                </h3>
              </div>
              <p className="hidden max-w-sm text-right text-sm leading-6 text-ink-muted md:block">
                Selected roles where the scope spans multiple product and
                engineering concerns.
              </p>
            </div>

            <div className="divide-y divide-border">
              {supportingProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-6 py-8 md:grid-cols-[10rem_1fr_auto] md:items-start md:gap-10"
                >
                  <div className="text-xs text-ink-muted">
                    <p>{project.period}</p>
                    <p className="mt-1">{project.type}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium tracking-tight text-ink">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm text-primary">{project.role}</p>
                    <p className="mt-4 max-w-2xl leading-7 text-ink-secondary">
                      {project.description}
                    </p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-secondary transition-colors hover:text-primary"
                    >
                      Visit ↗
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Folio;
