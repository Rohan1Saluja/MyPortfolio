import { useNavigate } from "react-router-dom";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import TechStack from "./Sections/TechStack";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-x-hidden">
      <Banner />
      <About />
      <TechStack />
      <Contact />
    </section>
  );
};

export default Home;
