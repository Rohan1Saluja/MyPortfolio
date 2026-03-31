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
        Building & Scaling Digital Products
      </h1>

      <h4 className="md:text-lg w-3/4 md:max-w-2/5 text-text-300 pointer-events-none animate-shimmer">
        Hi, I'm a product-focused Software Engineer working across frontend,
        backend, and systems — turning ideas into real, high-impact products
      </h4>

      <CustomButton className="animate-fade-in-up" onClick={handleScroll}>
        Explore My Work
      </CustomButton>
    </section>
  );
};

export default Banner;
