import React from "react";
import { motion } from "framer-motion";
import { projects } from "../utils";
import { FiArrowRight } from "react-icons/fi";

const Folio: React.FC = () => {
  return (
    <section id="folio" className="px-6 py-14 md:px-10 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Selected work
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-200">
            Products, systems, and problems I've worked on.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-text-300">
            A selection of production work spanning commerce, AI, logistics,
            enterprise software, mobile applications, and infrastructure.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-14 py-12 md:py-16 border-t border-secondary-500/20"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-300">
                  <span>{project.index}</span>
                  <span>·</span>
                  <span>{project.type}</span>
                  <span>·</span>
                  <span>{project.period}</span>
                </div>

                <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-text-200">
                  {project.title}
                </h3>

                <p className="mt-2 text-primary">{project.role}</p>

                <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-text-300">
                  {project.description}
                </p>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-text-300 mb-4">
                    Engineering scope
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.contributions.map((contribution) => (
                      <span
                        key={contribution}
                        className="px-3 py-2 text-sm rounded-md border border-secondary-500/25 text-text-200"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metrics.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-2xl font-semibold text-text-200">
                          {metric.value}
                        </p>

                        <p className="mt-1 text-sm text-text-300">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-9 flex flex-wrap gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:opacity-80 transition-opacity flex items-center gap-1.5"
                    >
                      Visit product <FiArrowRight className="mt-0.5" />
                    </a>
                  )}

                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="text-sm font-medium text-text-200 hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      View engineering story <FiArrowRight className="mt-0.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:flex lg:items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="overflow-hidden rounded-xl border border-secondary-500/20 bg-card">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Folio;
