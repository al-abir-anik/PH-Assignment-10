import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
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
    console.log(id);
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
              <button className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10">
                Add To Favourite
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Delete Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
