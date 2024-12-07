const MovieCard = ({ movie }) => {

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-56 object-cover"
        src={movie.posterUrl}
        alt="Movie Poster"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.genre}</p>
        <p className="text-sm text-gray-600">{movie.duration}</p>
        <p className="text-sm text-gray-600">{movie.releaseYear}</p>
        <p className="text-sm text-gray-600">{movie.rating}</p>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;