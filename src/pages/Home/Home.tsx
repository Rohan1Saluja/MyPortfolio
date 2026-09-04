import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import TechStack from "./Sections/TechStack";
import Folio from "./Sections/Folio";
import EventsOverview from "./Sections/EventsOverview";
import Highlights from "./Sections/Highlights";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Banner />

      {/* Proof before biography */}
      <Highlights />

      {/* What I've actually built */}
      <Folio />

      {/* Engineering capabilities */}
      <TechStack />

      {/* Personal context */}
      <About />

      {/* Community / personality */}
      <EventsOverview />

      <Contact />
    </main>
  );
};

export default Home;
