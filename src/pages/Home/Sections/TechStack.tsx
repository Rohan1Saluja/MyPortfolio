import { capabilities } from "../utils";

const TechStack: React.FC = () => {
  return (
    <section id="capabilities" className="px-6 py-14 md:px-10 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Engineering capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-200">
            How I build.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-text-300">
            I work across product interfaces, backend systems, infrastructure,
            architecture, and applied AI depending on what the product needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-secondary-500/20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.category}
              className="p-7 md:p-8 border-r border-b border-secondary-500/20"
            >
              <span className="text-sm text-text-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl md:text-2xl font-semibold text-text-200">
                {capability.category}
              </h3>

              <p className="mt-3 max-w-xl text-text-300 leading-relaxed">
                {capability.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {capability.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-text-200 border-b border-secondary-500/30 pb-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
