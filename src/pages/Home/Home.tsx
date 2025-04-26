import { useNavigate } from "react-router-dom";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="">
      <Banner />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
