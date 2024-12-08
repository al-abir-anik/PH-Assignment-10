import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import SignIn from "../Components/NewUser/SignIn";
import SignUp from "../Components/NewUser/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "./../Components/AddMovies/AddMovies";
import MyFavourites from "./../Components/MyFavourites/MyFavourites";
import AllMovies from "../Components/AllMovies/AllMovies";
import ForgotPass from "../Components/NewUser/ForgotPass";
import MovieDetails from "../Components/MovieCard/MovieDetails";
import UpdateMovie from "../Components/AddMovies/UpdateMovie";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/movie"),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPass></ForgotPass>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:5000/movie"),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/movie"),
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
        path: "/updateMovie",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFavourites",
        element: (
          <PrivateRoute>
            <MyFavourites></MyFavourites>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
