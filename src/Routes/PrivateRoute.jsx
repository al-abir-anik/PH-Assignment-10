import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg mb-52"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/signIn"}></Navigate>;
};

export default PrivateRoute;
