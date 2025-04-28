import { technologies } from "../utils";

const TechStack: React.FC = () => {
  return (
    <section className="my-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Explore My Tech Arsenal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {technologies.map((techCategory) => (
            <div
              key={techCategory.category}
              className="relative shadow-xl rounded-2xl p-6 overflow-hidden flex flex-col items-center justify-center hover:-translate-y-0.5"
              style={{
                backgroundImage: `url(${techCategory.backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                filter: "brightness(55%)",
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center animate-shimmer text-text">
                {techCategory.category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {techCategory.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent-700 hover:bg-accent-600 !text-white backdrop-blur-xl text-sm rounded-lg transition-colors animate-fade-in-up"
                  >
                    {item.name}
                  </a>
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
