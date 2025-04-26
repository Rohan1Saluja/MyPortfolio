import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center gap-4 min-h-1/2">
      Navigate to{" "}
      <span
        onClick={() => navigate("/form")}
        className="underline hover:cursor-pointer"
      >
        User Form
      </span>
    </section>
  );
};

export default Home;
