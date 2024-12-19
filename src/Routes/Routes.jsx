import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import SignIn from "../Components/NewUser/SignIn";
import SignUp from "../Components/NewUser/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyFavourites from "../Components/AllMovies/FavouriteMovies/MyFavourites";
import AllMovies from "../Components/AllMovies/AllMovies";
import ForgotPass from "../Components/NewUser/ForgotPass";
import AddMovies from "./../Components/AddMovies/AddMovies";
import MovieDetails from "../Components/MovieCard/MovieDetails";
import UpdateMovie from "../Components/AddMovies/UpdateMovie";
import SecureRoute from "./SecureRoute";
import About from "../Components/About/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://movie-track-server.vercel.app/featuredMovies"),
      },
      {
        path: "/signIn",
        element: (
          <SecureRoute>
            <SignIn></SignIn>
          </SecureRoute>
        ),
      },
      {
        path: "/signUp",
        element: (
          <SecureRoute>
            <SignUp></SignUp>
          </SecureRoute>
        ),
      },
      {
        path: "/forgotPassword",
        element: <ForgotPass></ForgotPass>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://movie-track-server.vercel.app/movie"),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://movie-track-server.vercel.app/movie"),
      },
      {
        path: "/addMovies",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-track-server.vercel.app/movie/${params.id}`),
      },
      {
        path: "/myFavourites",
        element: (
          <PrivateRoute>
            <MyFavourites></MyFavourites>
          </PrivateRoute>
        ),
        loader: () => fetch("https://movie-track-server.vercel.app/favourites"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default Routes;
