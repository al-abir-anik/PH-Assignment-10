import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [wrongPass, setWrongPass] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setWrongPass("");
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setWrongPass("Invalid Email or Password");
      });
  };

  const handleForgotPassword = () => {
    const emailForReset = emailRef.current.value;
    if (!emailForReset) {
      setWrongPass("Please provide a valid Email address");
    } else {
      navigate("/forgotPassword", { state: { email: emailForReset } });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Sign In
        </h2>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {wrongPass && <p className="text-red-600">{wrongPass}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <button
              onClick={handleForgotPassword}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700"
            >
              Forgot Password?
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to={"/signUp"} className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </p>

        {/* Social Login */}
        <div className="mt-4">
          <button
            className="w-full py-2 px-4 bg-[#456289] text-white font-semibold rounded-lg hover:bg-[#80A4C0] focus:outline-none focus:ring-2 focus:ring-[#80A4C0]"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
