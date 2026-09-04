import LeetCodeActivity from "../Components/LeetCode";
import { capabilities } from "../utils";

const TechStack: React.FC = () => {
  return (
    <section id="capabilities" className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">
            Engineering capabilities
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-text-200 md:text-5xl">
            How I build.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-text-300">
            I work across product interfaces, backend systems, infrastructure,
            architecture, and applied AI depending on what the product needs.
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-secondary-500/20 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <div
              key={capability.category}
              className="border-b border-r border-secondary-500/20 p-7 md:p-8"
            >
              <span className="text-sm text-text-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-text-200 md:text-2xl">
                {capability.category}
              </h3>

              <p className="mt-3 max-w-xl leading-relaxed text-text-300">
                {capability.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {capability.items.map((item) => (
                  <span
                    key={item}
                    className="border-b border-secondary-500/30 pb-1 text-sm text-text-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <LeetCodeActivity />
      </div>
    </section>
  );
};

export default TechStack;
