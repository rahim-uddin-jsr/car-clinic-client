import Banner from "../Banner/Banner";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <h2 className="text-5xl">This is Home</h2>
    </div>
  );
};

export default Home;
