import { useLoaderData } from "react-router-dom";
import Slider from "./Slider/Slider";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  const movieData = useLoaderData();

  return (
    <main>
      {/* Banner Section */}
      <section>
        <Slider></Slider>
      </section>

      {/* Featured Movie Section */}
      <section className="w-5/6 lg:w-3/4 mx-auto mt-14 mb-20 space-y-14">
        <h2 className="text-[#2E8B57] text-4xl font-bold text-center">
          Featured Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {movieData.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
