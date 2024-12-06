import Featured from "./FeaturedMovies/Featured";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <main>
      <div>
        <Slider></Slider>
      </div>
      <section className="w-5/6 lg:w-3/4 mx-auto mt-14 mb-20 space-y-14">
        <h2 className="text-[#2E8B57] text-4xl font-bold text-center">
          Featured Movies
        </h2>
        <div>
          <Featured></Featured>
        </div>
      </section>
    </main>
  );
};

export default Home;
