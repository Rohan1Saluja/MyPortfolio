import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Contact from "./Sections/Contact";
import EventsOverview from "./Sections/EventsOverview";
import Folio from "./Sections/Folio";
import Highlights from "./Sections/Highlights";
import TechStack from "./Sections/TechStack";

const Home = () => {
  return (
    <main>
      <Banner />
      <Folio />
      <Highlights />
      <TechStack />
      <About />
      <EventsOverview />
      <Contact />
    </main>
  );
};

export default Home;
