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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
