import CustomButton from "../../../components/UI/CustomButton";

const Banner: React.FC = () => {
  const handleScroll = () => {
    const folioSection = document.querySelector("#folio");
    if (folioSection) {
      setTimeout(() => {
        folioSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 mt-16 px-6 py-10 leading-loose">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium w-3/5 md:max-w-2/5 text-text-200 pointer-events-none animate-fade-in">
        Building Elegant Digital Experiences
      </h1>
      <h4 className="md:text-lg w-3/4 md:max-w-2/5 text-text-300 pointer-events-none animate-shimmer">
        Hi, I'm an AI Frontend Engineer passionate about crafting sleek and
        intuitive user experiences
      </h4>
      <CustomButton className="animate-fade-in-up" onClick={handleScroll}>
        Explore My Work
      </CustomButton>
    </section>
  );
};

export default Banner;
