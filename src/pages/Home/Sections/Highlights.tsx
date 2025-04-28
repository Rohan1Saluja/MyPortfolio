"use client";

import { motion } from "framer-motion";
import { highlights } from "../utils";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Highlights = () => {
  return (
    <section id="highlights" className="my-16 flex flex-col items-center">
      {/* Catchy Heading */}
      <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
        Empowering Solutions, One Highlight at a Time
      </h2>

      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 relative text-text-200">
        {/* Vertical separator */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 w-px bg-accent-300/20 rounded-xl animate-pulse" />

        <div className="flex flex-col gap-8">
          {highlights
            .filter((_, index) => index % 2 === 0)
            .map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: idx * 0.2 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-lg shadow-md bg-card"
              >
                <p className="text-lg text-foreground">
                  <span className="font-semibold">{item.title}: </span>
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="flex flex-col gap-8">
          {highlights
            .filter((_, index) => index % 2 !== 0)
            .map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: idx * 0.2 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-lg shadow-md bg-card"
              >
                <p className="text-lg text-foreground">
                  <span className="font-semibold">{item.title}: </span>
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
