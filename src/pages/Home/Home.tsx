import { useNavigate } from "react-router-dom";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import TechStack from "./Sections/TechStack";
import Folio from "./Sections/Folio";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-x-hidden">
      <Banner />
      <About />
      <TechStack />
      <Folio />
      <Contact />
    </section>
  );
};

export default Home;
