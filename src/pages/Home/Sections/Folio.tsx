import { projects } from "../utils";

const Folio: React.FC = () => {
  return (
    <section id="folio" className="my-10 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Crafting Solutions: A Glimpse into My Journey
      </h2>
      <p className="text-center text-lg text-gray-300 mb-6 max-w-[85%] md:max-w-2/3 mx-auto animate-fade-in">
        From building dynamic UIs and AI-powered interfaces at Recurrent
        Software to optimizing logistics and enhancing customer satisfaction at
        Repairable, here are some of the projects that showcase my expertise and
        passion for software development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center md:max-w-2xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-secondary-500/35 rounded-lg overflow-hidden shadow-xl backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Folio;
