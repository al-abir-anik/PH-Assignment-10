import { useLoaderData } from "react-router-dom";
import MovieCard from "../../MovieCard/MovieCard";
import FavouriteMovieCard from "./FavouriteMovieCard";
import { useState } from "react";

const MyFavourites = () => {
  const loadedFavouriteMovies = useLoaderData();
  const [favouriteMovies, setFavouriteMovies] = useState(loadedFavouriteMovies);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Favourite Movies</h1>
          <p className="text-sm mt-1">
            Share the details of a new movie you want to add to our collection.
          </p>
        </div>
      </header>

      <main className="w-5/6 lg:w-3/4 mx-auto mt-14 mb-20 space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {favouriteMovies.map((movie) => (
            <FavouriteMovieCard
              key={movie._id}
              movie={movie}
              favouriteMovies={favouriteMovies}
              setFavouriteMovies={setFavouriteMovies}
            ></FavouriteMovieCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyFavourites;