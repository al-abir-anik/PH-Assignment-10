import { Link, useLoaderData } from "react-router-dom";
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
        <button className="btn">
          <Link to={"/allMovies"}>See All Movies</Link>
        </button>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Explore Genres
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Discover your favorite movie genres and dive into endless
            entertainment. Whether you love action, comedy, or drama, there's
            something for everyone!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Genre Cards */}
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Action</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Comedy</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Horror</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Romance</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Sci-Fi</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Thriller</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Drama</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-100 transition">
              <h3 className="text-xl font-semibold text-gray-800">Fantasy</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Heading and Description */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Be a part of a growing community of movie lovers! Discover new
            films, share your reviews, and connect with people who share your
            passion for cinema.
          </p>

          {/* Community Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">50,000+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
              <p className="text-gray-600">Movies Reviewed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5,000+</h3>
              <p className="text-gray-600">Daily Discussions</p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What Our Members Say
            </h3>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "This platform is amazing! I discovered so many movies I
                wouldn’t have otherwise. Love being part of this community."
              </p>
              <p className="text-gray-800 font-bold">
                — Alex J., Member since 2022
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
