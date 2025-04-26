import React from "react";
import MyPixarArt from "../../../assets/logos/PixarArt.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-10">
      {" "}
      {/* Section padding & background */}
      <div className="container mx-auto px-4 max-w-4/5">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-text">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-primary p-1 overflow-hidden shadow-lg">
              <img
                src={MyPixarArt}
                alt="Stylized picture of Rohan Saluja"
                className="w-full h-full object-cover rounded-full object-top"
                width="224"
                height="224"
              />
            </div>
          </div>
          <div className="text-center md:text-left flex-grow max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm Rohan Saluja
            </h3>
            <p className="text-lg md:text-xl mb-4 text-text/90">
              a Frontend Engineer passionate about crafting modern, responsive,
              and user-first web experiences.
            </p>
            <p className="text-lg md:text-xl mb-4 text-text/90">
              I bring ideas to life through clean, scalable code and thoughtful
              design, turning complex challenges into simple, intuitive
              products. From dynamic platforms to AI-driven solutions, I focus
              on building interfaces that not only look great but truly make an
              impact.
            </p>
            <p className="text-lg md:text-xl text-text/90">
              I'm always excited to collaborate, innovate, and push the
              boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
