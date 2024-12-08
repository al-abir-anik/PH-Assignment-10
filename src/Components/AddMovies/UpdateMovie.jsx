import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const navigate = useNavigate();
  const movieData = useLoaderData();
  const {
    _id,
    posterUrl,
    title,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = movieData;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { title, posterUrl, genre, duration, releaseYear, summary } = data;
    const updatedMovie = {
      title,
      posterUrl,
      genre,
      duration,
      releaseYear,
      summary,
    };

    // Send updatedMovie data to server
    fetch(`http://localhost:5000/movie/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Movie Updated Successfully",
          });
        }
        navigate(`/movieDetails/${_id}`);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Update Movie</h1>
          <p className="text-sm mt-1">
            Share the details of a new movie you want to add to our collection.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Movie Details
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Please fill out the form below to add a movie to the portal. Fields
            marked with an asterisk (*) are required.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Movie Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Title *
              </label>
              <input
                type="text"
                placeholder="Enter movie title"
                defaultValue={title}
                required
                {...register("title", {
                  minLength: {
                    value: 2,
                    message: "Movie Title should be at least 2 characters.",
                  },
                })}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.title && (
                <p className="text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Movie Poster */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Poster Image *
              </label>
              <input
                type="text"
                placeholder="Enter movie poster image URL"
                defaultValue={posterUrl}
                required
                {...register("posterUrl", {
                  pattern: {
                    value:
                      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/,
                    message: "Please enter a valid URL",
                  },
                })}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.posterUrl && (
                <p className="text-red-500">{errors.posterUrl.message}</p>
              )}
            </div>

            {/* Genre Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Genre *
              </label>
              <select
                defaultValue={genre}
                required
                {...register("genre")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  Select genre
                </option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
              {errors.genre && (
                <p className="text-red-500">{errors.genre.message}</p>
              )}
            </div>

            {/* Movie Duration */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Duration (in minutes) *
              </label>
              <input
                type="number"
                placeholder="Enter movie duration in minutes"
                defaultValue={duration}
                required
                {...register("duration", {
                  valueAsNumber: true,
                  min: {
                    value: 60,
                    message: "Duration must be greater than 60 minutes",
                  },
                })}
                className="w-full border border-gray-300
                 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.duration && (
                <p className="text-red-500">{errors.duration.message}</p>
              )}
            </div>

            {/* Release Year Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Release Year *
              </label>
              <select
                defaultValue={releaseYear}
                required
                {...register("releaseYear")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  Select release year
                </option>
                {Array.from({ length: 50 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
              {errors.releaseYear && (
                <p className="text-red-500">{errors.releaseYear.message}</p>
              )}
            </div>

            {/* Movie Rating */}
            {/* <div>
              <label className="block text-gray-700 font-medium mb-1">
                Rating *
              </label>
              <div className="flex items-center">
                <Rating
                  size={25}
                  allowHalfIcon={true}
                  className="inline-block text-yellow-500"
                />
              </div>
            </div> */}

            {/* Movie Summary */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Movie Summary
              </label>
              <textarea
                placeholder="Enter movie summary"
                rows="4"
                defaultValue={summary}
                required
                {...register("summary", {
                  minLength: {
                    value: 10,
                    message: "Movie Summary should be at least 10 characters.",
                  },
                })}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              {errors.summary && (
                <p className="text-red-500">{errors.summary.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UpdateMovie;
