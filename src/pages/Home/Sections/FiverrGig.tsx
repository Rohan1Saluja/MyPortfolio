import FiverrLogo from "../../../assets/logos/fiverr.png";

const FiverrGig: React.FC = () => {
  return (
    <section id="fiverr" className="my-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        💼 Hire Me on Fiverr
      </h2>
      <p className="text-lg text-text-200 max-w-3xl text-center mx-auto mb-6">
        Need a top-quality Frontend Engineer for your website or web app? I
        specialize in building modern, high-performance UIs using React,
        Next.js, and Tailwind CSS. Whether it's a landing page, dashboard, or
        full-stack solution, I deliver clean, scalable code with attention to
        detail.
      </p>
      <a
        href="https://www.fiverr.com/s/BRPw4E7"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-2xl mx-auto rounded-xl border border-secondary-700 bg-accent-900/5 overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-500 hover:scale-[101%] group"
      >
        <img
          src={FiverrLogo}
          alt="Fiverr Gig Preview"
          className={`w-full h-40 object-contain px-10 py-4 opacity-80 animate-pulse group-hover:animate-none`}
        />
        <div className="px-5 py-4 bg-accent/10">
          <h3 className="text-lg font-semibold mb-1">
            I will develop modern frontend apps using React, Next.js & Tailwind
          </h3>
          <p className="text-text-200 text-sm">
            Fast delivery · Clean code · Responsive design
          </p>
        </div>
      </a>
    </section>
  );
};

export default FiverrGig;
