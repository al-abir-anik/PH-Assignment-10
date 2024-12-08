import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const movieData = useLoaderData();
  const movieCard = movieData.find((m) => m._id == id);
  const {
    _id,
    posterUrl,
    title,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = movieCard;

  const handleDelete = (id) => {
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
        fetch(`https://movie-track-server.vercel.app/movie/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
              navigate("/allMovies");
            }
          });
      }
    });
  };

  const handleAddToFavourite = () => {
    const requestInfo = {
      userEmail: `${user.email}`,
      movieId: `${_id}`,
    };

    fetch(`https://movie-track-server.vercel.app/favourites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section>
      <div className="w-full h-96 py-8 bg-[#9538e2] text-center space-y-3">
        <h2 className="font-bold text-3xl text-white">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full h-96 bg-[#f6f6f6] relative">
        <div className="w-3/4 h-fit mx-auto p-10 rounded-3xl bg-white flex gap-10 absolute inset-0 m-auto -top-72">
          <div className="w-2/5">
            <img src={posterUrl} className=" rounded-2xl" />
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-[#09080f]">{title}</h2>
            <p className="font-semibold text-xl text-[#09080f]/80">
              Genre : {genre}
            </p>
            <p className="font-normal text-base text-[#09080f]/60">
              Duration : {duration}
            </p>
            <p className="font-bold text-xl text-[#09080f]/80">
              Release Year : {releaseYear}
            </p>
            <p className="font-bold text-xl text-[#09080f]/80">
              Rating : {rating}
            </p>
            <p className="font-normal text-base text-[#09080f]/60">{summary}</p>
            {/* <div className="rating block">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div> */}
            <div className="space-x-3">
              <button
                onClick={handleAddToFavourite}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Add To Favourite
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Delete Movie
              </button>
              <Link to={`/updateMovie/${_id}`}>
                <button className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10">
                  Update Movie
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
