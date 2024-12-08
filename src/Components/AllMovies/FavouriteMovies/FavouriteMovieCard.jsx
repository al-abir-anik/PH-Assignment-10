import Swal from "sweetalert2";

const FavouriteMovieCard = ({ movie, favouriteMovies, setFavouriteMovies }) => {
  const { _id, posterUrl, title, genre, duration, releaseYear, rating } = movie;

  const handleDeleteFavourite = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/favourites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Favourite movie has been deleted.",
                icon: "success",
              });
              const remainingMovies = favouriteMovies.filter(
                (m) => m._id != _id
              );
              setFavouriteMovies(remainingMovies);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-56 object-cover"
        src={posterUrl}
        alt="Movie Poster"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{genre}</p>
        <p className="text-sm text-gray-600">{duration}</p>
        <p className="text-sm text-gray-600">{releaseYear}</p>
        <p className="text-sm text-gray-600">{rating}</p>
        <button
          onClick={() => handleDeleteFavourite(_id)}
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Delete Favorite
        </button>
      </div>
    </div>
  );
};

export default FavouriteMovieCard;
