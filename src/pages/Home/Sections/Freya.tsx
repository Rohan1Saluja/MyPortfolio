import {
  FiBox,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiZap,
} from "react-icons/fi";
import CustomButton from "../../../components/UI/CustomButton";

const Freya = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl w-3/5 mx-auto bg-[#0D0D0D] text-white transform transition-transform duration-300 hover:scale-[101%]">
      {/* Banner */}
      <img
        src="/previews/freya-preview.png"
        alt="Freya Banner"
        className="w-full object-cover h-72 sm:h-96"
      />

      <div className="p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Freya — AI Chat + Plugins</h2>
          <span className="text-xs bg-yellow-700 text-white px-3 py-1 rounded-full font-semibold">
            🚧 In Progress
          </span>
        </div>

        <p className="text-text-600 mt-3 text-sm sm:text-base">
          A plugin-powered AI chat app with ChatGPT-style memory, tools, and
          deep context awareness. Freya brings the flexibility of AI agents with
          an interface anyone can use.
        </p>

        {/* Feature List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={<FiZap size={18} />} text="OpenAI Function Calling" />
          {/* <Feature icon={<Puzzle size={18} />} text="Plugin Architecture" /> */}
          <Feature icon={<FiCpu size={18} />} text="Chat Memory + Recall" />
          <Feature
            icon={<FiCheckCircle size={18} />}
            text="Auth + Role Management"
          />
          <Feature
            icon={<FiDatabase size={18} />}
            text="Database-backed Context"
          />
          <Feature icon={<FiBox size={18} />} text="Modular Plugin System" />
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-800 px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Redux</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              OpenAI API
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Supabase</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              PostgreSQL
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <CustomButton
            onClick={() =>
              window.open("https://ai-chat-plugins.vercel.app/", "_blank")
            }
          >
            Live Preview <FiExternalLink className="ml-2 w-4 h-4" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 hover:bg-[#222] transition">
    <div className="text-indigo-400">{icon}</div>
    <span className="text-sm">{text}</span>
  </div>
);

export default Freya;
