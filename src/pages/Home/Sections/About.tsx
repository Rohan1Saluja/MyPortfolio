import React from "react";
import { motion } from "framer-motion";

import MyPixarArt from "../../../assets/logos/PixarArt.jpg";
import { Instagram, LinkedIn, X } from "../../../assets/icons";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 py-14 md:px-10 md:py-20 border-t border-secondary-500/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            About
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-200">
            I like owning the messy middle between an idea and production.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 md:gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-2xl border border-secondary-500/20">
              <img
                src={MyPixarArt}
                alt="Stylized portrait of Rohan Saluja"
                className="w-full aspect-square object-cover object-top"
                width="320"
                height="320"
              />
            </div>

            <div className="flex items-center gap-5 mt-5">
              <a
                href="https://www.linkedin.com/in/rohansaluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>

              <a
                href="https://twitter.com/rohan1saluja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition-opacity"
                aria-label="X"
              >
                <X />
              </a>

              <a
                href="https://www.instagram.com/rohansalujamusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-text-200">
              I'm Rohan, a software engineer who enjoys working across product,
              frontend, backend, mobile, and infrastructure.
            </p>

            <div className="mt-7 space-y-6 text-base md:text-lg leading-relaxed text-text-300">
              <p>
                Over the last few years, I've worked in startup environments
                where building a product often meant moving between product
                decisions, user experiences, APIs, data models, deployments,
                debugging, and production operations.
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

            <div className="mt-10 pt-7 border-t border-secondary-500/20">
              <p className="text-sm uppercase tracking-[0.18em] text-text-300 mb-3">
                Outside engineering
              </p>

              <p className="text-base md:text-lg leading-relaxed text-text-300">
                I also spend time around music, technology communities, and
                meeting people who enjoy building ambitious things.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
