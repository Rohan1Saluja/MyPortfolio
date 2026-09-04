"use client";

import { motion } from "framer-motion";
import { impact } from "../utils";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="px-6 py-14 md:px-10 md:py-20 border-y border-secondary-500/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Production impact
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-200">
            Engineering measured beyond commits.
          </h2>

          <p className="mt-4 text-text-300 text-lg leading-relaxed">
            A few numbers from products and systems I've helped build, operate,
            and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-secondary-500/20">
          {impact.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="min-h-[190px] p-6 border-r border-b border-secondary-500/20"
            >
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                {item.value}
              </p>

              <h3 className="mt-4 font-medium text-text-200">{item.label}</h3>

              <p className="mt-2 text-sm leading-relaxed text-text-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
