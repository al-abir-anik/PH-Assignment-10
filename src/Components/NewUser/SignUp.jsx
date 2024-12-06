import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullname = e.target.fullname.value;
    const photoUrl = e.target.photoUrl.value;

    console.log(fullname, photoUrl);

    setErrorMessage("");
    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password required at least one UPPERCASE and one lowercase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Signed Up Succesfully!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        toast.error("ERROR", error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("Signed Up Succesfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        toast.error("ERROR", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Picture URL
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter your picture URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to={"/signIn"} className="text-blue-500 hover:text-blue-700">
            Sign In
          </Link>
        </p>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignUp}
            className="w-full py-2 px-4 bg-[#456289] text-white font-semibold rounded-lg hover:bg-[#80A4C0] focus:outline-none focus:ring-2 focus:ring-[#80A4C0]"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
