import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";

const AddMovies = () => {
  const [rating, setRating] = useState(0);
  //   const handleRating = (rate) => {
  //     setRating(rate);
  //   };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const posterUrl = form.posterUrl.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const newmovie = {
      title,
      posterUrl,
      genre,
      duration,
      releaseYear,
      summary,
    };

    // Send newMovie data to server
    fetch("http://localhost:5000/movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newmovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            toast.success("New Movie Added Successfully")
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Add a New Movie</h1>
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
            onSubmit={handleAddMovie}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Movie Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter movie title"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Movie Poster */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Poster Image *
              </label>
              <input
                type="text"
                name="posterUrl"
                placeholder="Enter movie poster image URL"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Genre Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Genre *
              </label>
              <select
                name="genre"
                defaultValue=""
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
            </div>

            {/* Movie Duration */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Movie Duration (in minutes) *
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter movie duration"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Release Year Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Release Year *
              </label>
              <select
                name="releaseYear"
                defaultValue=""
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
                name="summary"
                placeholder="Enter movie summary"
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
              >
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddMovies;
