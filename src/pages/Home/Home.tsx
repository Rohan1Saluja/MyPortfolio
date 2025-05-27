import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import TechStack from "./Sections/TechStack";
import Folio from "./Sections/Folio";
import EventsOverview from "./Sections/EventsOverview";
import Highlights from "./Sections/Highlights";
import FiverrGig from "./Sections/FiverrGig";
import Freya from "./Sections/Freya";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <Banner />
      <About />
      <TechStack />
      <Highlights />
      <Folio />
      <Freya />
      <FiverrGig />
      <EventsOverview />
      <Contact />
    </section>
  );
};

export default Home;
